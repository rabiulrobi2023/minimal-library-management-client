const Navbar = () => {
  const listItem = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>All Books</a>
      </li>
      <li>
        <a>Add Book</a>
      </li>
      <li>
        <a>Borrow Summary</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 justify-between ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {listItem}
          </ul>
        </div>
        <img className="h-12" src="/public/library.png" alt="" />
        <h1 className=" text-xl px-1 font-bold hover: bg-none">
          <span className="text-[#52a2cd]">Minimal</span>
          <span className="text-[#eda100]"> Library</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{listItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
