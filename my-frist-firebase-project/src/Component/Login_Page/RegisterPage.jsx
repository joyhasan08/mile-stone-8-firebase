

const RegisterPage = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.pass.value;
        console.log(email, password);
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
                </div>
            </div>
        </>
    );
};

export default RegisterPage;