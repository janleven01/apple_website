import Image from "next/image";
import { navLists } from "@/constants";

const NavBar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image
          src="/apple.svg"
          alt="apple logo"
          width={15}
          height={15}
        />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 txt-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image
            src="/assets/images/search.svg"
            alt="search"
            width={18}
            height={18}
          />
          <Image
            src="/assets/images/bag.svg"
            alt="bag "
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
