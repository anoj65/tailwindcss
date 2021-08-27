const Navbar = () => {
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://helascript.com/wp-content/uploads/2021/08/hela-sript-new.png"
            class="w-28"
          ></img>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              href="#"
              className="flex items-center -mb-0.5  px-4 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              Home
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center -mb-0.5  px-4 dark:border-transparent"
            >
              About Us
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center -mb-0.5  px-4 dark:border-transparent"
            >
              Blog
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center -mb-0.5  px-4 dark:border-transparent"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex items-center md:space-x-4">
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-coolGray-800 dark:text-coolGray-100 focus:dark:bg-coolGray-900"
          ></input>
          <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-8 py-3 font-semibold border rounded dark:border-coolGray-100 dark:text-coolGray-100">
            Sign in
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
