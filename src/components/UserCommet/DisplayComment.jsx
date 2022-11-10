import React, { useEffect, useState } from 'react';
import CommentCart from './CommentCart';

const DisplayComment = ({id}) => {
    const [comments, setComment] = useState([]);
    console.log(`$this is${id}`)
    useEffect(() => {
        fetch(`http://localhost:5000/comments/${id}`)
        .then(res => res.json())
        .then(result => { setComment(result) })
    }, [])

    return (
        <div className='w-full'>
            {
                comments.length===0?<p className='text-red-500 text-center font-bold text-3xl'>No Comments</p>
                :
                <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                {
                    comments.map(comment => 
                     <CommentCart
                        key={comment._id}
                        comment={comment}
                    ></CommentCart>
                    )
                }
            </div>
            }
        </div>
    );
};

export default DisplayComment;