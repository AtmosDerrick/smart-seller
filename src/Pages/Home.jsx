import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWheatAwn,
  faDoorOpen,
  faRightToBracket,
  faRegistered,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Spining from "../components/Spining";
import retail from "../assets/images/retail.png";

function Home() {
  return (
    <div>
      <Spining />
      <div className="w-full">
        <div className="w-2/4 mx-auto text-lg font-medium text-center tracking-wide">
          {" "}
          <p>
            Welcome to SmartSeller, your all-in-one Unified Commerce solution
            designed exclusively for B2B companies. At SmartSeller, we
            understand the unique challenges of B2B commerce and have crafted a
            platform to elevate your business to new heights.
          </p>
        </div>
      </div>

      <div className="w-3/4 mx-auto">
        <img src={retail} className="w-full" />
      </div>
    </div>
  );
}

export default Home;
