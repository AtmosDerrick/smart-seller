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
      <section className="w-3/4 mx-auto flex justify-between gap-8 mt-12">
        <div className="w-full">
          <h2 className="title text-3xl mb-4 text-primary">
            About SmartSeller
          </h2>
          <div className="text-base">
            <p>
              Qui laboris mollit consequat nulla cupidatat minim. Deserunt culpa
              amet excepteur nostrud pariatur cillum irure minim elit deserunt
              veniam officia aute. Cupidatat esse cupidatat cupidatat sunt aute
              excepteur ex occaecat velit non nulla esse aute. Velit amet do
              deserunt nulla reprehenderit.
            </p>
            <br></br>
            <p>
              Qui laboris mollit consequat nulla cupidatat minim. Deserunt culpa
              amet excepteur nostrud pariatur cillum irure minim elit deserunt
              veniam officia aute. Cupidatat esse cupidatat cupidatat sunt aute
              excepteur ex occaecat velit non nulla esse aute. Velit amet do
              deserunt nulla reprehenderit.
            </p>
            <br></br>
            <p>
              Qui laboris mollit consequat nulla cupidatat minim. Deserunt culpa
              amet excepteur nostrud pariatur cillum irure minim elit deserunt
              veniam officia aute. Cupidatat esse cupidatat cupidatat sunt aute
              excepteur ex occaecat velit non nulla esse aute. Velit amet do
              deserunt nulla reprehenderit.
            </p>
            <br></br>
          </div>
        </div>
        <div className="w-full">
          <img src="https://www.pepperi.com/wp-content/uploads/2015/04/b2b-ecommerce.png" />
        </div>
      </section>
    </div>
  );
}

export default Home;
