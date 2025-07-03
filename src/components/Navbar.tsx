import { BookA, Menu } from "lucide-react";
import { useRef } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">
      <Link to={"/"} className="flex gap-2 items-center">
        <BookA className="text-white" />
        <h1 className="text-lg text-white font-bold">BookSync</h1>
      </Link>

      <ul className="text-white md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-white/70 transition" href="#">
            All Books
          </a>
        </li>
         <NavLink to={"/create-book"} className="hover:text-white/70 transition">
            Add Book
         </NavLink>
        <li>
          <a className="hover:text-white/70 transition" href="#">
            Borrow Summary
          </a>
        </li>
      </ul>

      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={toggleMobileMenu}
      >
        <Menu className="text-white" size={30} />
      </button>

      <div
        ref={mobileMenuRef}
        className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 hidden md:hidden"
      >
        <ul className="flex flex-col space-y-4 text-white text-lg">
          <li>
            <a href="#" className="text-sm">
              All Books
            </a>
          </li>
          <li>
            <NavLink to={"/create-book"}  className="text-sm">
              Add Book
            </NavLink>
          </li>
          <li>
            <a href="#" className="text-sm">
              Borrow Summary
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
