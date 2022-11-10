import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Hook/UseHook';
const DeleteComment = ({handleDelete,mycomment}) => {
useTitle("DeleteComment")
    return (
        <div>
        <button onClick={()=>handleDelete(mycomment)} className="flex text-red-600 font-bold items-center px-2 py-1 pl-0 space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                             <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                             <rect width="32" height="200" x="168" y="216"></rect>
                             <rect width="32" height="200" x="240" y="216"></rect>
                             <rect width="32" height="200" x="312" y="216"></rect>
                             <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                         </svg>
                         <span>Remove</span>
                     </button>
                     
         <Link to={`/update/${mycomment._id}`}>
         <button className="flex text-blue-700 font-bold items-center px-2 py-1 pl-0 space-x-1">
         <input type="checkbox" checked="checked" className="checkbox" />
                         <span>EDIT</span>
                     </button></Link>
        </div>
    );
};

export default DeleteComment;