import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="w-full   py-4  items-center bg-white text-primary">
        <div className="w-3/4 mx-auto flex justify-between">
          {" "}
          <div className="title text-xl hover:cursor-pointer">SmartSeller</div>
          <div>
            <ul className="w-full flex justify-between gap-6 text-base font-medium">
              <li className="hover:cursor-pointer hover:opacity-80  pb-2  border-white  ">
                Functions{" "}
              </li>
              <li className="hover:cursor-pointer hover:opacity-80  pb-2  border-white">
                packages{" "}
              </li>
              <li className="hover:cursor-pointer hover:opacity-80  pb-2  border-white">
                Industries{" "}
              </li>
              <li className="hover:cursor-pointer hover:opacity-80  pb-2  border-white">
                FAQ{" "}
              </li>
              <li className="hover:cursor-pointer hover:opacity-80  pb-2  border-white">
                Company{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul className="w-full flex justify-between gap-4 font-semibold">
              <li className="bg-orange-600 px-4 py-2 text-white rounded-lg hover:cursor-pointer ">
                Lets Talk
              </li>
              <li className="py-2 hover:cursor-pointer">
                ENV <FontAwesomeIcon icon={faAngleDown} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full bg-primary h-[10vh]"></div>
    </div>
  );
}

export default NavBar;
