import React, { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar";
import Comment from "@/Components/Comment";

export default function BlogDetail(props, blogTitle) {
  useEffect(() => {
    if (!props.blogs) {
      Inertia.get(`/detail/${blogTitle}`);
    }
  }, []);

  return (
    
    <div className="bg-state-50" data-theme="">
      <Head title="Detail" />
      <Navbar user={props.auth.user} />
        {props.blogs && props.blogs.length > 0 ? (
          props.blogs.map((data, i) => {
            const imageUrl = data.image
              ? `/storage/image/${data.image}`
              : "/images/shutterstock_179216297.jpg";

            return (
              <div key={i} className="flex-1 m-12 pl-40 pr-40">
                <h1 className="text-6xl flex justify-center font-bold text-gray-900 mb-3">{data.title}</h1>
                <h2 className="text-lg flex justify-center font-semibold text-gray-900 mb-6">{data.description}</h2>
                <h3 className="text-lg flex justify-center font-normal text-gray-900">Dibuat oleh :&nbsp;<a href="" className="hover:underline font-medium">{data.author}</a></h3>
                <h3 className="text-md flex justify-center font-normal text-gray-900 mb-12">{new Date(data.created_at).toLocaleString()}</h3>
                <img src={imageUrl} className="flex mx-auto h-68 mb-12" title="Gambar Cukimay" alt="Gambar dimaling"/>
                <p className="flex justify-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque quas quo recusandae. Nobis cupiditate excepturi necessitatibus! Odit sequi cum eum, earum illo, ipsam veniam, cupiditate dolore nam vero laudantium repellendus suscipit saepe error eos? Nulla blanditiis nesciunt nobis corporis? Deserunt nam soluta fugit ex officiis est illo recusandae porro perferendis quis id voluptate, quia atque sint. Nemo repudiandae id aspernatur natus at. Voluptatibus vero aut laborum, quasi et excepturi odit ad corrupti deserunt eos animi aliquam quo illo maxime! Numquam eius laudantium obcaecati nihil? Hic optio non quibusdam minima quis similique sint illo sunt repudiandae labore quos temporibus at blanditiis placeat vitae esse, harum aut omnis quo. Nihil corrupti maxime laboriosam provident dolores perspiciatis rerum ducimus! Qui iusto modi laboriosam at tempora natus dignissimos vero consectetur incidunt vel minus nemo veniam deserunt veritatis fugiat, dolor soluta est impedit quo? Id animi nisi error itaque quibusdam aliquam illum amet ea ratione? Unde iusto reprehenderit illum obcaecati tempore qui culpa nihil nisi sunt ipsum aut nulla aliquid suscipit excepturi non, adipisci voluptate. Corrupti laudantium dicta numquam facilis maiores, ullam sint et, accusantium, sapiente ducimus autem pariatur! Maxime cumque alias cum libero labore dolorem? Distinctio repellat nobis nihil provident blanditiis nulla voluptas!</p><br />
                <p className="flex justify-center mb-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque quas quo recusandae. Nobis cupiditate excepturi necessitatibus! Odit sequi cum eum, earum illo, ipsam veniam, cupiditate dolore nam vero laudantium repellendus suscipit saepe error eos? Nulla blanditiis nesciunt nobis corporis? Deserunt nam soluta fugit ex officiis est illo recusandae porro perferendis quis id voluptate, quia atque sint. Nemo repudiandae id aspernatur natus at. Voluptatibus vero aut laborum, quasi et excepturi odit ad corrupti deserunt eos animi aliquam quo illo maxime! Numquam eius laudantium obcaecati nihil? Hic optio non quibusdam minima quis similique sint illo sunt repudiandae labore quos temporibus at blanditiis placeat vitae esse, harum aut omnis quo. Nihil corrupti maxime laboriosam provident dolores perspiciatis rerum ducimus! Qui iusto modi laboriosam at tempora natus dignissimos vero consectetur incidunt vel minus nemo veniam deserunt veritatis fugiat, dolor soluta est impedit quo? Id animi nisi error itaque quibusdam aliquam illum amet ea ratione? Unde iusto reprehenderit illum obcaecati tempore qui culpa nihil nisi sunt ipsum aut nulla aliquid suscipit excepturi non, adipisci voluptate. Corrupti laudantium dicta numquam facilis maiores, ullam sint et, accusantium, sapiente ducimus autem pariatur! Maxime cumque alias cum libero labore dolorem? Distinctio repellat nobis nihil provident blanditiis nulla voluptas!</p>
              </div>
            );
          })
        ) : (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>404 Teu Katimu!</span>
            </div>
          </div>
          
        )}
        <Comment />

      </div>
    
  );
}
