import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userContext } from '../context/ContextProvider';
import Loading from '../smallPages/Spinner/Loading';

import useTitle from '../Hook/UseHook';
const Login = ({ children }) => {
    useTitle("Login")
    const { login } = useContext(userContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handlelogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = { email: user.email };

                console.log(currentUser);

                // getting jwt token
                fetch('https://photograpy-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(result => {
                        localStorage.setItem('photographyToken', result.token);
                        console.log(result)
                    })

                toast("Login success")
                navigate(from, { replace: true });
            }).catch((error) => {
                toast("User Not Found");
            })

    }

    return (
        <div className='flex justify-center my-5'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-400">Dont have account?
                    <Link to={'/register'} rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
                </p>


                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <form onSubmit={handlelogin} className="card-body">
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

export default Login;