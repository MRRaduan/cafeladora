import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full glass fixed z-50">
        <nav className="navbar w-full">
          <div className="container mx-auto">
            <div className="flex-1 flex lg:flex-1">
              <a href="" className="flex items-center -m-1 5 p-1 5">
                <div className="flex flex-col ml-1">
                  <span className="text-2xl font-black mb-0 leading-4 ">
                    caféladora.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
