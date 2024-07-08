const Header = () => {
  const menuItem = (
    <>
      <a
        href="/"
        className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold  py-2 px-4 rounded-lg duration-300"
      >
        Home
      </a>
      <a
        href="#about"
        className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold  py-2 px-4 rounded-lg duration-300"
      >
        About
      </a>
      <a
        href="#contact"
        className=" hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold py-2 px-4 rounded-lg duration-300"
      >
        Contact me
      </a>
      <a
        href="#skill"
       
        className=" hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold py-2 px-4 rounded-lg duration-300"
      >
        Skills
      </a>
      <a
        href="/Blogs"
       
        className=" hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold py-2 px-4 rounded-lg duration-300"
      >
        Blogs
      </a>
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-white ">
        <div className="lg:w-[35%]">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {menuItem}
            </ul>
          </div>
          <img
            className="btn btn-ghost normal-case w-20 rounded-full h-12 "
            src="https://i.ibb.co/zX763sB/h.jpg"
            alt=""
          />
          <h4 className="text-xl italic hover:font-mono">Md Hasan</h4>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
