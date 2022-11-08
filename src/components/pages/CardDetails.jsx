import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const carddetails = useLoaderData();
    const {title,img,price,description,_id} = carddetails;
    return (
       <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
				<span className="text-xs dark:text-gray-400">February 19, 2021</span>
                <p className='font-bold'>Price: ${price}</p>
				<p>{description}</p>
			</div>
		</div>
    <button className='border p-2 rounded'>Back To Home</button>
	</div>
</section>
       </div>
    );
};

export default CardDetails;