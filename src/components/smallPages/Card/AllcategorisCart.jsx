import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AllcategorisCart = ({ allCategories }) => {
    console.log(allCategories)
    const { title, img, price, description,_id } = allCategories;
    return (
        <article className="flex flex-col dark:bg-gray-900">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img alt="/" className="object-cover h-96 w-full rounded dark:bg-gray-500" src={img} />
                    </PhotoView>
                </PhotoProvider>
            </a>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-blue-400">{title}</a>
                
                <p>
                    {
                        description >= 100 ? "" : description.slice(0, 100)
                    }
                    <Link to={`/cartDetail/${_id}`} className='text-blue-800'>...View Detail</Link>
                </p>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">$ {price}</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 1, 2020</span>
                    <span>2.1K views</span>
                </div>
            </div>
        </article>

    );
};

export default AllcategorisCart;