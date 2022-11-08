import React from 'react';

const Comment = () => {
    return (
        <div className="flex flex-col w-full max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
            
                </div>
                <div className="flex flex-col w-full">
                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                    <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-blue-400">Leave feedback</button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
            </div>
        </div>
    );
};

export default Comment;