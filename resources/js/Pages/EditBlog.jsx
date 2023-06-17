import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { router } from "@inertiajs/react";

export default function EditBlog(props) {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
          id: props.myBlog.id,  
          title,
          description,
          category,
        }
        router.post('/blog/update', data)
        setTitle('')
        setDesc('')
        setCategory('')
      }

    return (
        <div className='min-h-screen bg-gray-50' data-theme="light">
            <Head title='Edit Blog'/><br />
            <div className="flex justify-center">
  <div className="card w-full sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-5/12 bg-base-100 shadow-xl m-7">
    <div className='p-4 text-4xl font-bold flex justify-center mt-2.5'>Edit Blog</div>
    <div className="card-body">
                              <input
          type="text"
          placeholder="Judul"
          className="mx-7 m-1.5 input input-bordered w-11/12 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
          onChange={(title) => setTitle(title.target.value)}
          defaultValue={props.myBlog.title}
        />
        <textarea
          placeholder="Deskripsi"
          className="mx-7 m-1.5 input input-bordered w-11/12 h-24 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
          onChange={(description) => setDesc(description.target.value)}
          defaultValue={props.myBlog.description}
          rows="8"
        />
        <input
          type="text"
          placeholder="Kategori"
          className="mx-7 m-1.5 input input-bordered w-11/12 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
          onChange={(category) => setCategory(category.target.value)}
          defaultValue={props.myBlog.category}
        />
        <button
          className="btn btn-primary mx-7 m-7 w-11/12"
          onClick={() => handleSubmit()}
        >
          UPDATE
        </button>
                            </div>
                        </div>
                        </div>
            </div>
    )
}