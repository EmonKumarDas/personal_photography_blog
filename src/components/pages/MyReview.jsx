import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/ContextProvider';
import ReviewCard from '../smallPages/MyReviewCard/ReviewCard';
import Loading from '../smallPages/Spinner/Loading';
import useTitle from '../Hook/UseHook';
import { useNavigate } from 'react-router-dom';
const MyReview = () => {
  const navigate = useNavigate();
  useTitle("MyReview");
  const { user, logout } = useContext(userContext);
  const [myComments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://photograpy-server.vercel.app/comments?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('photographyToken')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json()
      })
      .then(result => {
        setComments(result)
        setLoading(false)
      })
  }, [user?.email,logout])

  return (
    <div>
      {
        loading ? <Loading></Loading> : <div className='my-10'>
          {
            myComments.length===0 ? <h1 className='flex justify-center font-bold text-3xl my-40'>No Comments are Found</h1> : myComments.map(mycomment => <ReviewCard
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