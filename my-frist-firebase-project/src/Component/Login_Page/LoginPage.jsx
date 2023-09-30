import { FcGoogle } from 'react-icons/fc';
import { } from 'firebase/auth'
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../../helper/Firebase.init";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const LoginPage = () => {

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const redirect = useNavigate();
    const isUserLoggedIn = JSON.parse(localStorage.getItem("user"))
    const handleGoogleLogin = () => {
        // console.log(`gooooo`);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem("user", JSON.stringify(user))
                console.log(user);
                redirect('/home')
            })
            .catch((erro) => {
                console.log(`Error msg is`, erro.message);
            })

    }
    useEffect(() => {
        if (isUserLoggedIn) {
            redirect("/home")
        }
    }, [])

    return (
        <>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/WxVqftm/elyse-chia-kye-JW1z-RH0-I-unsplash.jpg)' }} className=" hero min-h-screen">
                <div className=' w-fit mx-5'>
                    <div className="card  w-fit mx-auto bg-neutral-content text-neutral-content">
                        <div className="card-body items-center text-center">

                            <form className="input-group-lg space-y-5">
                                <h2 className="text-5xl font-semibold text-blue-900  ">Login</h2>
                                <input className="input w-full text-black" type="email" placeholder="Your Email here" />
                                <input className="input w-full" type="password" placeholder="Password" />
                            </form>
                            <div className="card-actions justify-end py-5 gap-5 ">
                                <button className="btn btn-primary">Login</button>

                                <button onClick={handleGoogleLogin} className="btn "> <FcGoogle className='text-xl'></FcGoogle> Login</button>

                            </div>
                        </div>
                        <div className='bg-green-500 rounded-b-lg '>
                            <Link to={"/reg"}>
                                <h1 className=' p-1
                             font-bold'>Please Register Here</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default LoginPage;