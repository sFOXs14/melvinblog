import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

const Navbar = ({ user }) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarFixed(currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isNavbarFixed ? "fixed" : ""} shadow-lg`} style={{ zIndex: "9999", transition: "opacity 0.3s", top: "0" }} data-theme="light">
      <a href="/"><div className="btn btn-ghost">
        <img src="/images/log.png" alt="logo" className="w-14 mr-3"/>
        <a className="font-semibold normal-case text-xl text-gray-700">MelvinBlog</a>
      </div></a>
      {!user ? (
        <>
          <div className="flex-1 gap-2 justify-end">
            <form action="" method="get">
              <div className="form-control bg-light-100">
                <input type="text" name="search" placeholder="Cari di sini..." className="input input-bordered" />
              </div>
            </form>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://as2.ftcdn.net/v2/jpg/00/64/67/27/1000_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="Avatar" />
                </div>
              </label>
              <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <Link href={route('login')} as="button">Login</Link>
                </li>
                <li>
                <Link href={route('register')} as="button">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 gap-2 justify-end">
            <form action="" method="get">
              <div className="form-control bg-light-100">
                <input type="text" name="search" placeholder="Cari di sini..." className="input input-bordered" />
              </div>
            </form>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/melvin.jpg" alt="Avatar" />
                </div>
              </label>
              <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link href={route('profile.edit')}>Profile</Link>
                </li>
                <li>
                  <Link href={route('dashboard')} className="justify-between">
                    Dashboard
                    <span className="badge bg-indigo-600">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
