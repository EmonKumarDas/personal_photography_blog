import React from 'react';

const Card = () => {
    return (

        <div href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block">
            <img role="presentation" className="object-cover w-full rounded dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                <span className="text-xs dark:text-gray-400">January 25, 2021</span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
            </div>
            <div className='grid grid-cols-2 mx-5 py-4'>
                <h1>Price: $20</h1>
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" checked />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" /> <> / </> <div className="font-bold">5</div>
                </div>
            </div>
        </div>
    );
};

export default Card;