import React from "react";

function Menu() {
  return (
    <div className="w-full px-4  backdrop-blur-lg bg-opacity-50 mt-4 absolute bg-white z-20 h-[70vh]">
      {" "}
      <ul className="w-full lg:flex lg:justify-between gap-6 text-base font-medium">
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
      </ul>
    </div>
  );
}

export default Menu;
