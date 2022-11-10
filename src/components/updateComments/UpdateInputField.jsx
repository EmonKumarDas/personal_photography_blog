import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateInputField = () => {
    const comment = useLoaderData();
    const handleUpdate=(event)=>{
        event.preventDefault();
        const NewMessage = event.target.comment.value;
        const comments = {NewMessage}
        fetch(`http://localhost:5000/commentsEdit/${comment._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json',
                body:JSON.stringify(comments)
            }
        }
        
        ).then(res=>res.json()).then(data=>{
            toast("updated")
            console.log(data)})
    }
    return (
        <div className='my-5'>
            <section className="p-6 dark:text-gray-100">
                <form onSubmit={handleUpdate} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-3xl font-bold leading-tight">Update Your Comment</h2>

                    <div>
                        <label className="block mb-1 ml-1">Comment</label>
                        <textarea name="comment" type="text" defaultValue={comment.NewMessage} placeholder="Comment..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-gray-800"></textarea>
                    </div>
                    <div>
                        <button className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-blue-400 focus:ring-blue-400 hover:ring-blue-400 dark:text-gray-900">Update</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateInputField;