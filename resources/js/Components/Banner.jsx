import React from 'react';

const Banner = ({ user }) => {
  return (
    <React.Fragment>
    {!user ? (
      <div className="hero bg-base-200">
        <div className="hero-content flex-col max-w-5xl lg:flex-row-reverse mb-7 mt-7">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac viverra
              risus, ut fermentum odio. Aenean interdum dictum lacus, eleifend commodo massa iaculis id. Lorem ipsum dolor sit
              Amer <a className="link link-primary font-semibold">Register</a>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mr-7 bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input type="text" placeholder="Email" className="input input-bordered mb-3 mt-4" />
              </div>
              <div className="form-control">
                <input type="text" placeholder="Password" className="input input-bordered " />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover mb-3 mt-1 text-indigo-500">
                    Forgot Password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 mb-3">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1617234084793-11a2b9345949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZHVuZyUyQyUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome back, {user.name}!</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
              aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    )}
    </React.Fragment>
  );
};

export default Banner;
