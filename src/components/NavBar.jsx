import {
  faAngleDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import Menu from "./Menu";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <nav className="w-full   py-4  items-center bg-white text-primary">
        <div className="xl:w-3/4 px-4 xl:px-0 mx-auto flex justify-between">
          {" "}
          <div className="title text-xl hover:cursor-pointer">SmartSeller</div>
          <div className="hidden lg:block">
            <ul className="w-full lg:flex lg:justify-between gap-6 text-base font-medium">
              <a
                href="#functions"
                className="hover:cursor-pointer hover:opacity-80  pb-2  border-white  ">
                Functions
              </a>
              <a
                href="#packages"
                className="hover:cursor-pointer hover:opacity-80  pb-2  border-white">
                packages{" "}
              </a>
              <a
                href="#industries"
                className="hover:cursor-pointer hover:opacity-80  pb-2  border-white">
                Industries{" "}
              </a>
              <li className="hover:cursor-pointer hover:opacity-80  pb-2  border-white">
                FAQ{" "}
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            <ul className="w-full flex justify-between gap-4 font-semibold ">
              <li className="bg-orange-600 px-4 py-2 text-white rounded-lg hover:cursor-pointer ">
                Lets Talk
              </li>
              <li className="py-2 hover:cursor-pointer ">
                ENV <FontAwesomeIcon icon={faAngleDown} />
              </li>
            </ul>
          </div>
          <div
            className="lg:hidden"
            onClick={() => {
              setIsActive(!isActive);
            }}>
            {isActive ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="text-xl transition-all duration-500"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-xl transition-all duration-500"
              />
            )}
          </div>
        </div>
      </nav>
      <div className="w-full bg-primary h-[5vh] lg:h-[10vh]"></div>
      <div
        className={
          isActive
            ? "absolute h-[50vh] w-full mt-[0] transition-all duration-500 z-[20] "
            : "absolute h-[50vh] w-full mt-[-100rem] transition-all duration-500 z-20"
        }>
        <Menu />
      </div>
    </div>
  );
}

export default NavBar;
