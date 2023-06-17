import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

function CreateForm(props) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [isNotif, setIsNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    Inertia.post("/blog", formData)
      .then(() => {
        setIsNotif(true);
        setImage("");
        setTitle("");
        setDesc("");
        setCategory("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white dark:bg-gray-800 max-w-7xl lg:w-100 overflow-hidden shadow-sm sm:rounded-lg mb-6">
      <div className="p-6 text-gray-900 dark:text-gray-100">
        {isNotif && (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{props.flash.message}</span>
            </div>
          </div>
        )}
        <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Judul"
            className="m-2 input input-bordered w-full focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <input
            type="text"
            placeholder="Deskripsi"
            className="m-2 input input-bordered w-full focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
            onChange={(e) => setDesc(e.target.value)}
            value={description}
            required
          />
          <input
            type="text"
            placeholder="Kategori"
            className="m-2 input input-bordered w-full focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          />
          <label className="block mt-2 mb-3">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              name="image"
              id="image"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <button className="btn btn-primary m-2" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateForm;
