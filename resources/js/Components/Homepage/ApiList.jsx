import React, { useState, useEffect } from "react";

const isBlog = (blog) => {
  return blog.map((data, i) => {
    const imageUrl = data.urlToImage
      ? data.urlToImage
      : "/images/shutterstock_179216297.jpg";

    return (
      <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 m-1 mb-2">
        <figure>
          <a href="" className="object-cover w-full h-48 lg:h-64"><img
            src={imageUrl}
            alt="Blog Image"
            className="object-cover w-full h-48 lg:h-64"
          /></a>
        </figure>
        <div className="card-body">
          <h2 className="card-title hover:underline">
            <a href="">{data.title}</a>
          </h2>
          <p className="hover:underline hover:text-blue-500"><a href="">{data.description}</a></p>
          <div className="card-actions justify-end">
            <div className="badge badge-inline">{new Date(data.publishedAt).toLocaleString()}</div>
            <div className="badge badge-outline">{data.author}</div>
          </div>
        </div>
      </div>
    );
  });
};

const noBlog = () => {
  return <div>Saat ini tidak ada Blog tersedia</div>;
};

const BlogList = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const apiKey = "7ab11e89b57847c1ad266817c8390e97"; // Replace with your NewsAPI.org API key

    // Fetch blog data from the NewsAPI.org endpoint
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setBlog(data.articles))
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setBlog([]); // Set an empty array in case of error
      });
  }, []);

  return !blog ? noBlog() : isBlog(blog);
};

export default BlogList;
