import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full bg-base-100 pt-2 fixed z-50">
        <nav className="navbar  container mx-auto">
          <div className="flex-1 flex lg:flex-1">
            <a href="" className="flex items-center -m-1 5 p-1 5">
              <img width="60" src="./logo.png" alt="" />
              <div className="flex flex-col ml-1">
                <span className="text-xl font-bold mb-0 leading-4">
                  caféladora
                </span>
                <span className="text-sm mt-0 leading-4">
                  calcule seu próximo cafézin
                </span>
              </div>
            </a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
