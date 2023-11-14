import React from "react";

function Menu() {
  return (
    <div className="w-full px-4 mt-4 absolute bg-white z-20">
      {" "}
      <ul className="w-full lg:flex lg:justify-between gap-6 text-base font-medium">
        <li className="hover:cursor-pointer hover:opacity-80  pb-4  border-white  ">
          Functions{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-4  border-white">
          packages{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-4  border-white">
          Industries{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-4  border-white">
          FAQ{" "}
        </li>
        <li className="hover:cursor-pointer hover:opacity-80  pb-4  border-white">
          Company{" "}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
