import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllcategorisCart from '../smallPages/Card/AllcategorisCart';
import Loading from '../smallPages/Spinner/Loading';

import useTitle from '../Hook/UseHook';
const AllCategories = () => {
useTitle("AllCategories")  
    // const allCategories = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services").then(res => res.json()).then(result => {

            setCategories(result.newService)
            setLoading(false)
        })
    }, [])
    console.log(categories)
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">ALL SERVICES</h2>
                    <p className="font-serif text-sm dark:text-gray-400">Get your choose whatever you want!!</p>
                </div>
                {
                    loading ? <Loading></Loading> : <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            categories.map(service => <AllcategorisCart
                                key={service._id}
                                allCategories={service}

                            ></AllcategorisCart>)
                        }
                    </div>
                }


            </div>
        </section>
    );
};

export default AllCategories;