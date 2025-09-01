import Link from "next/link";
import { useState } from "react";
import { ProudIcon } from "./icons";
import { NavTitle } from "./NavTitle";
import { MenuToggle } from "./MenuToggle";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [menuDrop, setMenuDrop] = useState(false);
  const [title, setTitle] = useState("");

  function handleClickTitle(title: string) {
    setTitle(title.toLowerCase());
    setMenuDrop(false);
  }

  return (
    <div className="fixed z-20 w-full bg-white dark:bg-gray-900 border-t-8 shadow-md border-cyan-400 dark:border-cyan-500 transition-colors duration-200">
      <div className="container w-full max-w-screen-xl px-2 py-1 mx-auto">
        <div className="flex items-center justify-between">
          <MenuToggle menuDrop={menuDrop} setMenuDrop={setMenuDrop} />

          <div className="hidden md:flex">
            <Link href="/">
              <button className="focus:outline-none">
                <ProudIcon className="object-center w-12 h-12" />
              </button>
            </Link>
          </div>

          <div className="hidden m-2 md:flex">
            <NavTitle clickedTitle={title} setTitle={setTitle} />
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Link href="/">
                <div onClick={() => handleClickTitle("home")}>
                  <ProudIcon className="object-center w-12 h-12" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {menuDrop && <NavTitle clickedTitle={title} setTitle={setTitle} />}
      </div>
    </div>
  );
};
