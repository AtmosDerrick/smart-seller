import { faAngleDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function Menu() {
  return (
    <div className="w-full px-4  backdrop-blur-lg bg-opacity-50  absolute bg-white z-20 h-[70vh]">
      {" "}
      <ul className="w-full lg:flex lg:justify-between gap-6 text-base font-medium pt-4">
        <li className="hover:cursor-pointer hover:opacity-80  pb-12  border-white  ">
          Functions{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-12  border-white">
          packages{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-12  border-white">
          Industries{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-12  border-white">
          FAQ{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-12  border-white">
          Company{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-12  border-white">
          <FontAwesomeIcon icon={faGlobe} /> <span>ENV</span>{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
