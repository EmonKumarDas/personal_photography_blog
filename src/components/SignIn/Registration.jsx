import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../context/ContextProvider';

const Registration = ({ children }) => {
    const { googleSignIn,CreateUser,updateUser } = useContext(userContext);
	// const navigate = useNavigate();
	// const location = useLocation();
	// const from = location.state?.from?.pathname || '/';
    // google signIn
    const HandlegoogleLogin = () => {
        googleSignIn().then((result) => {
            console.log(result);
        })
    }

    // form registration
    const hangleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        CreateUser(email,password).then(()=>{
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.password.value = "";
            e.target.confirmPassword.value = "";
            handleUserProfile(name);
            // navigate(from, { replace: true });
        })


    }
    const handleUserProfile=(name)=>{
        const profile={
            displayName:name
        }
        updateUser(profile).then(()=>{})
    }
    return (
        <div className='flex justify-center my-5'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Register to your account</h2>
                <p className="text-sm text-center dark:text-gray-400">Dont have account?
                    <Link to={'/login'} rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
                </p>

                <div onClick={HandlegoogleLogin} className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <form onSubmit={hangleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="Email" name="email" placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Registration;