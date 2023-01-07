import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

import { useTheme } from "../state/AppContext";

export const Nav = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <header className="w-full bg-gray-900 text-white sticky top-0">
      <nav className="container p-4 mx-auto flex justify-between items-center">
        <Link href={"/"} passHref legacyBehavior>
          <a className="text-3xl flex items-center opacity-100 hover:opacity-70">
            P<span className="text-xl">okemon App</span>
          </a>
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={"/favorites"} legacyBehavior>
            <a className="opacity-100 hover:opacity-70">Favoritos</a>
          </Link>
          <div className="w-[1px] h-10 bg-gray-50"></div>
          <div className="text-2xl cursor-pointer" onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </div>
        </div>
      </nav>
    </header>
  );
};
