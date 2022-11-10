import React from 'react';
import useTitle from '../Hook/UseHook';

const Blog = () => {
    useTitle("Blog")
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">Difference between SQL and NoSQL?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">🛬 SQL databases are relational<br></br>🛬  NoSQL databases are non-relational.</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">What is JWT, and how does it work?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> 🛬  JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.<br></br> 🛬 A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: sdkjkngraf.sdfksaof3rlwefsd.fds</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">What is the difference between javascript and NodeJS?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">🛬 NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. <br></br>🛬 Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">How does NodeJS handle multiple requests at the same time?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">🛬 NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                </details>
            </div>
        </div>
    </section>
    );
};

export default Blog;