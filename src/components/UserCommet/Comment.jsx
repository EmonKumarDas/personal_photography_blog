import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Comment = ({ children,id }) => {
    const { user } = useContext(userContext);
    let email = user?.email;
    let name = user?.displayName;
    let photo = user?.photoURL;
    let dateTime = new Date();
    var date = dateTime.getFullYear()+'-'+(dateTime.getMonth()+1)+'-'+dateTime.getDate();
    var time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
    console.log(id)
    const [ratingOne,setRatingOne] = useState(0);
    const [ratingTwo,setRatingTwo] = useState(1);
    const [ratingThree,setRatingThree] = useState(2);
    const[isSubmit,setSubmit] = useState(false);
    let total_rating = (ratingOne+ratingTwo+ratingThree)-3;
    const handleMessage = (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        let messages = {
            NewMessage: message,
            name,
            email,
            photo,
            rating:total_rating,
            date,
            time,
            cateId:id
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messages),
        })
            .then(res => res.json())
            .then(result => {
                e.target.message.value = "";
                setSubmit(true);
                window.location.reload(true);
                toast("Message send")
            
            })
    }

    return (
        <div className="flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your Review!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">

                </div>
                <form onSubmit={handleMessage} className="flex flex-col w-full">
                    <textarea rows="3" name="message" placeholder="Write Your Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                    {/* Ratting  start*/}
                    <p className="dark:text-gray-400">Please Rate My Photography</p>
            <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
			<div className="flex">
				<button onClick={()=>setRatingOne(ratingOne+1)} disabled = {ratingOne===1 ? true:false} title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={ratingOne===1?"currentColor":""} className="w-6 h-6 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button onClick={()=>setRatingTwo(ratingTwo+1)} disabled = {ratingTwo===2 ? true:false} title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={ratingTwo===2?"currentColor":""} className="w-6 h-6 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button onClick={()=>setRatingThree(ratingThree+1)} disabled = {ratingThree===3 ? true:false} title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={ratingThree===3?"currentColor":""} className="w-6 h-6 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>

			</div>
			<span className="dark:text-gray-400">{isSubmit===true?total_rating===0:total_rating} out of 3</span>
		</div>
            {/* Ratting  end*/}
                    <button className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-blue-400">Leave feedback</button>
                </form>

            </div>
            <div className="flex items-center justify-center">
                <Link to='/' rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Comment;