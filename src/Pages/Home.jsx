import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWheatAwn,
  faDoorOpen,
  faRightToBracket,
  faRegistered,
  faChartLine,
  faLocationDot,
  faTruck,
  faMobile,
  faChartSimple,
  faQuoteLeft,
  faQuoteRight,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Spining from "../components/Spining";
import retail from "../assets/images/retail.png";

function Home() {
  return (
    <div className="px-4 xl:px-0">
      <Spining />
      <div className="w-full mt-4 lg:mt-0 hidden lg:block">
        <div className="w-3/4 xl:w-2/4 mx-auto text-base lg:text-lg font-medium text-center tracking-wide">
          {" "}
          <p>
            Welcome to SmartSeller, your all-in-one Unified Commerce solution
            designed exclusively for B2B companies. At SmartSeller, we
            understand the unique challenges of B2B commerce and have crafted a
            platform to elevate your business to new heights.
          </p>
        </div>
      </div>

      <div className="3xl:w-3/4 mx-auto mt-8 lg:mt-0 ">
        <img src={retail} className="w-full" />
      </div>
      <section className="w-full xl:w-3/4 mx-auto lg:flex lg:justify-between gap-8 mt-12">
        <div className="w-full">
          <h2 className="title text-3xl mb-4 text-primary">
            About SmartSeller
          </h2>
          <div className="text-sm xl:text-base">
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

      <div className="w-full bg-gray-50 py-4">
        <section className="xl:w-3/4 mx-auto mt-8">
          <h4 className="w-full text-center font-medium text-gray-500 text-lg mb-4">
            Functions
          </h4>
          <h2 className="title text-xl lg:text-2xl text-center text-primary">
            Functions of SmartSeller <br></br>to improve sales performance
          </h2>
          <div className="w-3/4 mx-auto grid lg:grid-cols-2 gap-8 text-gray-600">
            <div className="w-full rounded-2xl bg-white shadow-2xl py-4 mt-8 h-[25rem]">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-3xl text-center text-primary
              w-full"
              />
              <h3 className="text-xl lg:text-2xl text-center text-primary mt-2 lg:mt-4 font-medium pb-2 lg:pb-4 tracking-wider">
                Activity Tracking
              </h3>
              <p className="px-2 py-4">
                <p className="mb-4">
                  <h5 className="text-lg font-medium pb-2 lg:pb-4">
                    Tracking and Check-in:
                  </h5>{" "}
                  Use GPS to track staff movement including customer check-in
                  verification
                </p>
                <p>
                  <h5 className="text-lg font-medium pb-2 lg:pb-4">
                    Plan Routes and Visits:
                  </h5>
                  Monitor daily customer appointments and route plans using
                  integrated calendar, including assignment of meetings
                </p>
              </p>
            </div>{" "}
            <div className="w-full rounded-2xl bg-white shadow-2xl py-4 mt-8 h-[25rem]">
              <FontAwesomeIcon
                icon={faTruck}
                className="w-full text-3xl  text-center text-primary"
              />
              <h3 className="text-xl lg:text-2xl text-center text-primary mt-2 lg:mt-4 font-medium tracking-wider">
                Order-Delivery Execution
              </h3>
              <p className="px-2 py-4">
                <p className="mb-4">
                  <h5 className="text-lg font-medium pb-2 lg:pb-4">
                    {" "}
                    Order Taking and Processing:
                  </h5>{" "}
                  Take orders at the storefront using customizable product and
                  pricing list to send orders immediately to the office.
                </p>
                <p>
                  <h5 className="text-lg font-medium pb-2 lg:pb-4">
                    {" "}
                    Multiple Pricing:
                  </h5>{" "}
                  Set rules of pricing based on the types of customers including
                  rules of bulk discount / promotion.
                </p>
              </p>
            </div>
            <div className="w-full rounded-2xl bg-white shadow-2xl py-4 mt-8 h-[25rem]">
              <FontAwesomeIcon
                icon={faMobile}
                className="text-3xl text-center text-primary
              w-full"
              />
              <h3 className="text-xl lg:text-2xl text-center text-primary mt-2 lg:mt-4 font-medium pb-2 lg:pb-4 tracking-wider">
                Customer Communication
              </h3>
              <p className="px-2 py-4">
                <p className="mb-4">
                  <h5 className="text-lg font-medium pb-2 lg:pb-4">
                    Customer Mapping and Database:
                  </h5>
                  SENRI will help you in map out your customers with geographic
                  tags. Accumulate further information of sales and payment
                  history.
                </p>
                <p>
                  <h5 className="text-lg font-medium pb-2 lg:pb-4">
                    SMS Communication:
                  </h5>
                  SENRI will help you in map out your customers with geographic
                  tags.
                </p>
              </p>
            </div>
            <div className="w-full rounded-2xl bg-white shadow-2xl py-4 mt-8 h-[25rem]">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="text-3xl text-center text-primary w-full"
              />
              <h3 className="text-xl lg:text-2xl text-center text-primary mt-2 lg:mt-4 font-medium pb-2 lg:pb-4 tracking-wider">
                Advanced Analytics
              </h3>
              <p className="px-2 py-4">
                <p className="mb-4">
                  <h5 className="text-lg font-medium pb-2 lg:pb-4">
                    Customized Analytics Tools:
                  </h5>
                  SENRI web app allows you to analyze historical sales and
                  activity data with detailed analytics modules
                </p>
                <p>
                  <h5 className="text-lg font-medium pb-2 lg:pb-4">
                    Sales Targeting:
                  </h5>
                  You can assign ranges of targets for field staff and customers
                  so that they can view targets every day history.
                </p>
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12 w-full">
        <div className="xl:w-3/4 mx-auto">
          <h2 className="title text-2xl text-center text-primary">
            Our Partners
          </h2>
          <div className="flex justify-center">
            <img
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/08/featured.png?auto=format&q=60&w=2060&h=1236&fit=crop&crop=faces"
              className="h-[15] lg:h-[20rem]"
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-12">
        <div className="xl:w-3/4 mx-auto">
          <h2 className="title text-2xl text-center text-primary pb-8">
            Testimonies
          </h2>
          <div className="xl:w-3/4 mx-auto lg:flex lg:justify-between gap-12">
            <div className="w-full h-[20rem]lg:h-[30rem] bg-primary rounded-2xl p-4 mb-4 lg:mb-0">
              <div className="pb-4">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-xl lg:text-4xl text-white"
                />
              </div>
              <p className="testimony text-white text-xs lg:text-base ">
                <p>
                  {" "}
                  SmartSeller has revolutionized the way we conduct our B2B
                  business. The unified platform has streamlined our order
                  management process, providing us with real-time insights into
                  inventory levels and order status.{" "}
                </p>
                <p>
                  The seamless integration with our existing systems made the
                  transition smooth, and the personalized customer interactions
                  have strengthened our client relationships.{" "}
                </p>
                <p>
                  Thanks to SmartSeller, we've not only optimized our operations
                  but also gained a strategic edge with data-driven insights.
                  It's a game-changer for any B2B company looking to elevate
                  their commerce experience.
                </p>
              </p>
              <div className="text-right">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-xl lg:text-4xl text-white"
                />
              </div>
              <div className="w-full px-2 flex justify-between">
                <div className="h-[2rem] flex items-center justify-start">
                  <div>
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="text-2xl pt-2 text-gray-200"
                    />
                  </div>
                  <div className="pl-4 pt-4 font-medium text-white">
                    GitPlus Ghana
                  </div>
                </div>
                <div className="text-xs  pt-4 text-white">
                  <h3 className="font-normal text-gray-200">
                    Head of Marketing Department
                  </h3>
                  <h4>Mr. Emmanuel Osei</h4>
                </div>
              </div>
            </div>
            <div className="w-full  h-[20rem]lg:h-[30rem] bg-primary rounded-2xl p-4">
              <div className="pb-4">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-xl lg:text-4xl text-white"
                />
              </div>
              <p className="testimony text-white text-xs lg:text-base">
                <p>
                  {" "}
                  SmartSeller has revolutionized the way we conduct our B2B
                  business. The unified platform has streamlined our order
                  management process, providing us with real-time insights into
                  inventory levels and order status.{" "}
                </p>
                <p>
                  The seamless integration with our existing systems made the
                  transition smooth, and the personalized customer interactions
                  have strengthened our client relationships.{" "}
                </p>
                <p>
                  Thanks to SmartSeller, we've not only optimized our operations
                  but also gained a strategic edge with data-driven insights.
                  It's a game-changer for any B2B company looking to elevate
                  their commerce experience.
                </p>
              </p>
              <div className="text-right">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-xl lg:text-4xl text-white"
                />
              </div>
              <div className="w-full px-2 flex justify-between">
                <div className="h-[2rem] flex items-center justify-start">
                  <div>
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="text-2xl pt-2 text-gray-200"
                    />
                  </div>
                  <div className="pl-4 pt-4 font-medium text-white">
                    GitPlus Ghana
                  </div>
                </div>
                <div className="text-xs  pt-4 text-white">
                  <h3 className="font-normal text-gray-200">
                    Head of Marketing Department
                  </h3>
                  <h4>Mr. Emmanuel Osei</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary mt-8 h-[13rem] flex items-center">
        <div className="xl:w-3/4 mx-auto text-center title text-3xl font-bold tracking-wider">
          Increase Sales with SmartSeller
          <div className="text-base font-sans font-normal mt-8">
            <button className="bg-orange-500 rounded-2xl px-6 py-2 text-white font-medium shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-700">
        {" "}
        <footer className="px-4 xl:px-0 xl:w-3/4 mx-auto py-8  lg:h-[40vh] pt-8 lg:text-base text-sm text-white font-medium lg:flex lg:justify-between">
          <div className="mb-2">
            <p className="text-2xl font-semibold text-primary">SmartMarket</p>
            <p className="text-white">info@smartmarket.com</p>
          </div>
          <div className="mb-2">
            <ul className="leading-[2rem] lg:leading-[2.5rem] flex justify-justify">
              <div className="w-full">
                <li className="text-gray-300">Product</li>
                <li>Overview</li>
                <li>Packages</li>
              </div>
              <div className="w-full">
                <li>FAQ</li>
                <li>Schedule Demo</li>
                <li>Quotation</li>
              </div>
            </ul>
          </div>

          <div className="mb-2">
            <ul className="leading-[2rem] lg:leading-[2.5rem]">
              <li className="text-gray-300">Newsroom</li>
              <li>Case Studies</li>
              <li>Product Updates</li>
            </ul>
          </div>

          <div className="mb-2">
            <ul className="leading-[2rem] lg:leading-[2.5rem]">
              <li className="text-gray-300">Company</li>
              <li>Company Profile</li>
              <li>Mission, Vision, Value</li>
              <li>CEO Message</li>
              <li>COntact</li>
              <li>Careers</li>
            </ul>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Home;
