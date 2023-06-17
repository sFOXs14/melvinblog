import React from "react";

const isBlog = (blog) => {
  return blog.map((data, i) => {
    const imageUrl = data.image 
      ? `/storage/image/${data.image}`
      : "/images/shutterstock_179216297.jpg"; 

    return (
      <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 m-1 mb-2">
        <figure>
          <a href={`/detail/${data.title}`} className="object-cover w-full h-48 lg:h-64"><img src={imageUrl} alt="Blog Image" className="object-cover w-full h-48 lg:h-64"/></a>
        </figure>
        <div className="card-body">

          <h2 className="card-title">
          <a href={`/detail/${data.title}`}>{data.title}</a>
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="hover:underline"><a href={`/detail/${data.title}`}>{data.description}</a></p>
          <div className="card-actions justify-end">
            <div className="badge badge-inline"><a href="">{data.category}</a></div>
            <div className="badge badge-outline hover:underline"><a href="">{data.author}</a></div>
          </div>
        
        </div>
      </div>
    );
  });
};


const noBlog = () => {
  return <div>Saat ini tidak ada Blog tersedia</div>;
};

const BlogList = ({ blog }) => {
  return !blog ? noBlog() : isBlog(blog);
};

export default BlogList;
