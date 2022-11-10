import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../smallPages/Card/Card';
import PhotograpyBlog from '../smallPages/photographyBlog/PhotograpyBlog';
import Slider from '../smallPages/Slider/Slider';
import Loading from '../smallPages/Spinner/Loading';
import State from '../smallPages/state/State';

const HomePage = () => {

    const [services, setServices] = useState([])
    const [counter, setCounter] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);
    const [loding, setLoding] = useState(true)
    const pages = Math.ceil(counter / size);

    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(result => {
            setCounter(result.count)
            setServices(result.newService)
            setLoding(false)
        })
    }, [page, size])

    return (
        <div>
            <Slider></Slider>
            <PhotograpyBlog></PhotograpyBlog>
            <h1 className='text-center font-bold text-4xl text-white dark:bg-gray-800 py-10'>
                Services
            </h1>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    
                    {
                        loding?<Loading></Loading> :  <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            
                            services.map(service =>
                                <Card
                                    loding={loding}
                                    key={service.service_id}
                                    service={service}
                                ></Card>)
                        }

                    </div>
                    }
                  
                    <div className="flex justify-center">
                        <Link to='/allCategories'><button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button></Link>
                    </div>
                </div>

            </section>
            <div className='dark:bg-gray-800 px-20'>
                <p>Total Data {counter} Selected page {page + 1}</p>
                {
                    [...Array(pages).keys()].map(number => <button onClick={() => setPage(number)} className='bg-slate-500 hover:bg-slate-700 active:bg-slate-900 focus:outline-none text-white focus:ring focus:ring-violet-300 m-2 p-4 rounded'>{number + 1}</button>)
                }
            </div>
            <div>
                <h1 className='text-5xl font-bold text-center text-white dark:bg-gray-800 py-20'>My State</h1>
                <State></State>
            </div>


        </div>
    );
};

export default HomePage;