import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddService = () => {
    const handleAddService = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const postData = {
            title,
            price,
            image,
            description,

        }
        fetch('http://localhost:5000/ServiceCollection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData),
        })
            .then(res => res.json())
            .then(result => {
                toast("Service Added")
                e.target.title.value = ""
                e.target.price.value = ""
                e.target.image.value = ""
                e.target.description.value=""
                

            })
    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleAddService} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Add Service</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Title</label>
                            <input name="title" type="text" placeholder="Title" required className="p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Price</label>
                            <input name="price" type="number" placeholder="Price" required className="p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Image</label>
                            <input name="image" type="text" placeholder="Image" required className="p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">Description</label>
                            <textarea name="description" placeholder="Description" required className="p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                        </div>
                        <div className="col-span-full">

                            <div className="flex items-center space-x-2">

                                <button className="px-4 py-2 border rounded-md dark:border-gray-100">Add Service</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddService;