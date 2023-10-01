import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helper/Firebase.init";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
const RegisterPage = () => {
    const nextPage = useNavigate();
    const [loggedIn, setLoggedIn] = useState({})
    const [errorMsg, setErrorMsg] = useState('')

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.pass.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        console.log(email, password);
        if (password.length < 6) {
            console.log('password should be 6 letter');
            return
        }
        else if (!passwordRegex.test(password)) {
            console.log('wrong password');
            toast(`wrong password`)
            return
        }
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                console.log(res);
                console.log(res.operationType);
                setLoggedIn(res)
                toast("Registration successful");
                await new Promise(() => {
                    setTimeout(() => {
                        nextPage("/")
                    }, 3000);
                })
            })
            .catch((error) => {
                console.log(error);
                setErrorMsg(error.code)
                toast(errorMsg)
            })
    }
    return (
        <>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/5v6CrPQ/joel-muniz-BEr-JJL-Ksj-A-unsplash.jpg)' }} className="w-full min-h-screen flex   ">
                <div className="bg-neutral-content w-full md:w-1/2  lg:pt-20  rounded-lg">
                    <form onSubmit={handleOnSubmit} className=" flex flex-col py-5 md:px-10 px-4 gap-4" >
                        <h1 className=" font-semibold text-4xl py-10" >Registration from</h1>
                        <input className="input" name="email" type="email" placeholder="Enter your email" />
                        <input className="input" name="pass" type="password" placeholder="Enter your password" />
                        <input className="btn w-fit mx-auto" type="submit" />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
                <div>
                    {
                        loggedIn && <ToastContainer></ToastContainer>
                    }
                    {
                        errorMsg && <ToastContainer></ToastContainer>
                    }
                </div>
            </div>
        </>
    );
};

export default RegisterPage;