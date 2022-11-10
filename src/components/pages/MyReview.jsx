import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/ContextProvider';
import ReviewCard from '../smallPages/MyReviewCard/ReviewCard';
import Loading from '../smallPages/Spinner/Loading';
const MyReview = () => {
  const { user } = useContext(userContext);
  const [myComments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/comments?email=${user?.email}`)
      .then(res => res.json())
      .then(result => {
        setComments(result)
      setLoading(false)
      })
  }, [user?.email])

  return (
  <div>
    {
      loading? <Loading></Loading> :  <div className='my-10'>
      {
        myComments.length === 0 ? <h1 className='flex justify-center font-bold text-3xl my-40'>No Comments are Found</h1> : myComments.map(mycomment => <ReviewCard
          key={mycomment._id}
          mycomment={mycomment}
        ></ReviewCard>)
      }
    </div>
    }
  </div>
  );
};

export default MyReview;