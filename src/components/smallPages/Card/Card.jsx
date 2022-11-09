import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Card = ({ service }) => {
    const { title, img, price, description, _id } = service;

    return (

        <div href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img alt="/" className="object-cover h-96 w-full rounded dark:bg-gray-500" src={img} />
                </PhotoView>
            </PhotoProvider>

            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs dark:text-gray-400">January 25, 2021</span>
                <p>
                    {
                        description >= 100 ? "" : description.slice(0, 100)
                    }
                    <Link to={`/cartDetail/${_id}`} className='text-blue-800'>...View Detail</Link>
                </p>
            </div>
            <div className='grid grid-cols-2 mx-5 py-4'>
                <h1>Price: ${price}</h1>
                <div className="rating">
                    <button className='border p-3 rounded'>Add Service</button>
                </div>
            </div>
        </div>
    );
};

export default Card;