import { Link } from "react-router-dom";


const ForgotPassword = () => {
    return (
        <div className="bg-slate-200 min-h-screen ">
            <h1 className=" text-2xl font-semibold text-center py-2 px-2 text-blue-700 ">Forgot Password?</h1>
            <h1 className=" text-2xl font-semibold text-center py-10 px-2 ">Enter your User Email here</h1>
            <div className=" flex flex-col  justify-center w-4/5 mx-auto space-y-4 ">
                <input className='input' type="email" placeholder='Email here' />
                <button className='btn bg-blue-200 ' >Submit</button>
                <Link to={"/"} ><p className="text-blue-700">Go to Login</p></Link>
            </div>

        </div>
    );
};

export default ForgotPassword;