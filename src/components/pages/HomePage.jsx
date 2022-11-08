import React from 'react';
import Card from '../smallPages/Card/Card';
import PhotograpyBlog from '../smallPages/photographyBlog/PhotograpyBlog';
import Slider from '../smallPages/Slider/Slider';
import State from '../smallPages/state/State';

const HomePage = () => {
    return (
        <div>
            <Slider></Slider>
            <PhotograpyBlog></PhotograpyBlog>
            <h1 className='text-center font-bold text-4xl text-white dark:bg-gray-800 py-10'>
                Services
            </h1>


            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card></Card>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                    </div>
                </div>
            </section>


            <State></State>
        </div>
    );
};

export default HomePage;