import React from 'react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Dropdown from '@/Components/Dropdown';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import CreateForm from '@/Components/CreateForm';

export default function Dashboard(props) {
    const [show, setShow] = useState(false);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    useEffect(() => {
        if(!props.myBlog){
            Inertia.get('/blog')
        }
        return;
    }, [])

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:w-100">
                  <button className='btn btn-info mb-4 ml-3 text-white' onClick={() => setShow(true)}>+ Buat Baru</button>
                  { show && <CreateForm flash={props.flash} />}
                </div>
                <div className='p-4'>
                    {props.myBlog && props.myBlog.length > 0 ? props.myBlog.map((blog, i) => {
                        return (
                          <div className="flex justify-content justify-center">
                            <div key={i} className="card w-full max-w-7xl lg:w-100 bg-base-100 shadow-xl m-2">
                              <div className="card-body">
                                 <h2 className="card-title">
                                    {blog.title}
                                    <div className="badge badge-secondary">NEW</div>
                                 </h2>
                                    <p>{blog.description}</p>
                                    <div className="card-actions flex justify-end">
                                      <div className="badge badge-inline mt-3">{blog.category}
                                       <div className="card-actions absolute top-2 right-3">
                                       <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="btn btn-sm bg-white border-0 text-gray-500 hover:bg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                        </button> 
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('edit.blog')} method="get" data={{ id: blog.id }} as="button">Edit</Dropdown.Link>
                                            <Dropdown.Link href={route('delete.blog')} method="post" data={{ id: blog.id }} as="button">Delete</Dropdown.Link>
                                        </Dropdown.Content>
                                        </Dropdown>
                                       </div>
                                      </div>
                                    </div>
                              </div>
                            </div>
                        </div>
                        )
                    }) : <div className="alert alert-info shadow-lg">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Kamu belum menulis satupun blog.</span>
                    </div>
                  </div>}  
                
          </div>
        </div>
        </AuthenticatedLayout>
    );
}
