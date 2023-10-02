import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TermsAndconditn from '../../util/TermsAndconditn';
import { auth } from '../../helper/Firebase.init';
import { signInWithEmailAndPassword } from "firebase/auth";



const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const provider = new GoogleAuthProvider();
    const redirect = useNavigate();
    const isUserLoggedIn = JSON.parse(localStorage.getItem("user"))

    const handleSingIdBtn = () => {
        console.log(`1`);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
                redirect("/home")
            })
            .catch(error => console.error(error))
    }

    const handleGoogleLogin = () => {
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


    const handelOnChangeEmail = e => {
        const value = e.target.value;
        setEmail(value)
        console.log(value);
    }
    const handelOnChangePassword = (e) => {
        const pass = e.target.value
        setPassword(pass)
        console.log(pass);
    }


    return (
        <>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/WxVqftm/elyse-chia-kye-JW1z-RH0-I-unsplash.jpg)' }} className=" hero min-h-screen">
                <div className=' w-fit mx-5'>
                    <div className="card  w-fit mx-auto bg-neutral-content text-neutral-content">
                        <div className="card-body items-center text-center">
                            <form className="input-group-lg space-y-5">
                                <h2 className="text-5xl font-semibold text-blue-900  ">Login</h2>
                                <input onChange={handelOnChangeEmail} className="input w-full text-black" type="email" placeholder="Your Email here" />
                                <input onChange={handelOnChangePassword} className="input w-full" type="password" placeholder="Password" />
                                <TermsAndconditn></TermsAndconditn>
                            </form>
                            <div className="card-actions justify-end py-5 gap-5 ">
                                <button onClick={handleSingIdBtn} className="btn btn-primary">Login</button>

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