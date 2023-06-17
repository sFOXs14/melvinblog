import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import BlogList from '@/Components/Homepage/BlogList';
import ApiList from '@/Components/Homepage/ApiList';
import Paginator from '@/Components/Homepage/Paginator';
import Banner from '@/Components/Banner';

export default function Homepage(props) {
  const [activeTab, setActiveTab] = useState('crud');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-state-50" data-theme="light">
      <Head title={props.title} />
      <Navbar user={props.auth.user} />
      <Banner user={props.auth.user} />
      <div className="tabs mb-3 flex justify-center">
        <a
          className={`tab tab-bordered ${activeTab === 'crud' ? 'tab-active' : ''} text-lg py-9`}
          onClick={() => handleTabChange('crud')}
        >
          CRUD
        </a>
        <a
          className={`tab tab-bordered ${activeTab === 'api' ? 'tab-active' : ''} text-lg py-9`}
          onClick={() => handleTabChange('api')}
        >
          API
        </a>
      </div>
      <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
        {activeTab === 'crud' && <BlogList blog={props.blog.data} />}
        {activeTab === 'api' && <ApiList />}
      </div>
      {activeTab === 'crud' && (
        <div className="flex justify-center items-center pt-7 pb-10">
          <Paginator meta={props.blog.meta} />
        </div>
      )}
    </div>
  );
}
