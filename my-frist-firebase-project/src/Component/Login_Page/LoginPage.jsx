import { FcGoogle } from 'react-icons/fc';
import { getAuth } from 'firebase/auth'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../helper/Firebase.init";

const LoginPage = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        console.log(`gooooo`);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                console.log(user);
            })
            .catch((erro) => {
                console.log(`Error msg is`, erro.message);
            })

    }

    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/WxVqftm/elyse-chia-kye-JW1z-RH0-I-unsplash.jpg)' }} className=" hero min-h-screen">
            <div className="card w-fit mx-auto bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">

                    <form className="input-group-lg space-y-5">
                        <h2 className="text-5xl font-semibold  ">Login</h2>
                        <input className="input w-full text-black" type="email" placeholder="Your Email here" />
                        <input className="input w-full" type="password" placeholder="Password" />
                    </form>
                    <div className="card-actions justify-end py-5 gap-5 ">
                        <button className="btn btn-primary">Login</button>
                        <button onClick={handleGoogleLogin} className="btn "> <FcGoogle className='text-xl'></FcGoogle> Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;