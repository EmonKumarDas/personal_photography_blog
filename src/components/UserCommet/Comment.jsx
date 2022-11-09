import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Comment = ({ children }) => {
    const { user } = useContext(userContext);

    const handleMessage = (e) => {
        e.preventDefault();
        const message = e.target.message.value;

        let messages = {
            NewMessage: message,
            name: user.displayName,
            email: user.email,
            photo: user?.photoURL
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messages),
        })
            .then(res => res.json())
            .then(result => {
                e.target.message.value="";
                console.log(result)
            })
    }

    return (
        <div className="flex flex-col w-full max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">

                </div>
                <form onSubmit={handleMessage} className="flex flex-col w-full">
                    <textarea rows="3" name="message" placeholder="Write Your Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                    <button className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-blue-400">Leave feedback</button>
                </form>
            </div>
            <div className="flex items-center justify-center">
                <Link to='/' rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</Link>
            </div>
        </div>
    );
};

export default Comment;