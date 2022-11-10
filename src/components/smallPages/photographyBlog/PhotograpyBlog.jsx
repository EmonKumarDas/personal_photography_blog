import React from 'react';

const PhotograpyBlog = () => {

    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-blue-400 dark:text-gray-900">Photography</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Welcome to Your New Favorite Photography Blog</a>
                    <p className="mt-2">The Wix Blog is happy and proud to announce the birth of its little brother: the Wix Photography Blog. As the name suggests, it’s a fresh new medium addressed to photographers of all kinds. From professionals to amateurs, from artists to lovers of beautiful snaps. Its goal: giving you all the tips you need to succeed online. Why? Because it hasn’t gone unnoticed that the Internet has become the number one tool for promotion and success for all types of businesses. And photographers are no exception.

                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-blue-400">Read more</a>
                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotograpyBlog;