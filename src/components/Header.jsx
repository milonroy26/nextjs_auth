"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import mainLogo from "/public/assets/logo-dark.svg";

const Header = () => {
  let currentRoute = usePathname();

  return (
    <>
      <div className="bg-slate-100">
        <div className="navbar mx-auto container">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {/* for mobile */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    href={{
                      pathname: "/",
                    }}
                    className={
                      currentRoute === "/" ? "activeLink" : "pendingLink"
                    }
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href={{
                      pathname: "/product",
                    }}
                    className={
                      currentRoute === "/product" ? "activeLink" : "pendingLink"
                    }
                  >
                    Product
                  </Link>
                </li>
              </ul>
              {/* end */}
            </div>
            <a className="">
              <Image
                height={50}
                width={120}
                src={mainLogo}
                alt="Picture of the author"
                priority
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  href={{
                    pathname: "/",
                  }}
                  className={
                    currentRoute === "/" ? "activeLink" : "pendingLink"
                  }
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href={{
                    pathname: "/product",
                  }}
                  className={
                    currentRoute === "/product" ? "activeLink" : "pendingLink"
                  }
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/profile",
                  }}
                  className={
                    currentRoute === "/profile" ? "activeLink" : "pendingLink"
                  }
                >
                  profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex justify-center items-center">
              {/* profile */}
              <div className="dropdown dropdown-end">
                <ul>
                  <li className="list-none">
                    <Link
                      href={{
                        pathname: "/login",
                      }}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
                {/*  */}

                <div>
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://bdassistant.com/assets/image/svgs/profile-user.svg" />
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
