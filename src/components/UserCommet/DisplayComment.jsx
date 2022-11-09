import React, { useEffect, useState } from 'react';
import CommentCart from './CommentCart';

const DisplayComment = () => {
    const [comments, setComment] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/comments').then(res => res.json()).then(result => { setComment(...comments, result) })
    }, [])
    console.log(comments);
    return (
        <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">


            {
                comments.map(comment => comment.length === 0 ? 
                <p className='text-red-500'>No Comments</p> :
                 <CommentCart
                    key={comment._id}
                    comment={comment}
                ></CommentCart>


                )
            }
        </div>
    );
};

export default DisplayComment;