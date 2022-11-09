import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/ContextProvider';
import ReviewCard from '../smallPages/MyReviewCard/ReviewCard';

const MyReview = () => {
const {user} = useContext(userContext);
    const [myComments,setComments] = useState([]);
console.log(myComments);
    useEffect(()=>{
        fetch(`http://localhost:5000/comments?email=${user?.email}`)
        .then(res=>res.json())
        .then(result=>setComments(result))
    },[user?.email])

    return (
       <div className='my-10 flex'>

         {
           myComments.length===0?<h1 className='flex justify-center font-bold text-3xl my-40'>No Comments are Found</h1>: myComments.map(mycomment=> <ReviewCard
            key={mycomment._id}
            mycomment={mycomment}
            ></ReviewCard>)
         }
       </div>
    );
};

export default MyReview;