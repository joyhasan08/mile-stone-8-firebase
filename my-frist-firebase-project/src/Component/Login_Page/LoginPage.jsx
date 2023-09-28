

const LoginPage = () => {
    return (
        <div className="w-fit mx-auto py-16">
            <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">

                    <form className="input-group-lg space-y-5">
                        <h2 className="text-5xl font-semibold  ">Login</h2>
                        <input className="input w-full text-black" type="email" placeholder="Your Email here" />
                        <input className="input w-full" type="password" placeholder="Password" />
                    </form>
                    <div className="card-actions justify-end py-5 gap-5 ">
                        <button className="btn btn-primary">Login</button>
                        <button className="btn ">📥 Google Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;