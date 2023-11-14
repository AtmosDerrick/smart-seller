import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWheatAwn,
  faDoorOpen,
  faRightToBracket,
  faRegistered,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";

//images
import welcome from "../assets/images/laptop mockup.png";
import welcome1 from "../assets/images/welcome1.png";

function Spining() {
  const icons = [
    {
      key: 0,
      icon: faDoorOpen,
      description: "Seamless Integration",
      images: welcome,
    },
    {
      key: 1,
      icon: faRightToBracket,
      description: "Efficient Order Management",
      images: welcome1,
    },
    {
      key: 2,
      icon: faRegistered,
      description: "Enhanced Customer Relationships",
      images: welcome1,
    },
    {
      key: 3,
      icon: faChartLine,
      description: "Optimized Inventory Management",
      images: welcome1,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
      setRotation((prevRotation) => prevRotation + 360 / icons.length);
    }, 5000); // 1 minute interval

    return () => clearInterval(interval);
  }, []);
  const getIconPosition = (index) => {
    const angle = index * (360 / icons.length) + rotation;
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * 10; // Adjust the radius (5 in this case)
    const y = Math.sin(radians) * 10; // Adjust the radius (5 in this case)
    return { x, y };
  };

  return (
    <div className=" lg:h-[70vh]  bg-white">
      <div className="xl:w-3/4 mx-auto lg:flex lg:justify-between lg:gap-36 items-center">
        <div className="lg:w-3/4 mt-4  text-center relative">
          <h3 className="text-orange-600 title text-3xl ">
            Transform your B2B commerce experience with SmartSeller
          </h3>
          <div
            className="image-container w-full h-[35vh] lg:h-[50vh] "
            style={{
              transition: "opacity 0.5s ease",
            }}>
            {icons.map((item, index) => (
              <div>
                <img
                  key={index}
                  src={item.images}
                  alt={item.description}
                  className="w-full absolute"
                  style={{
                    opacity: activeIndex === index ? 1 : 0, // Fade in/out based on active index
                    transition: "opacity 0.5s ease, transform 0.5s ease", // Add transform for sliding effect
                    transform: `translateX(${
                      activeIndex === index ? 0 : -100
                    }%)`, // Slide in from the left
                    zIndex: activeIndex === index ? 1 : 0, // Ensure proper layering
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        {
          <div className="w-full  h-full items-center lg:mt-12">
            <ul className="marker:text-primary list-outside list-disc ml-6 leading-[2.5rem] lg:leading-[3rem] text-lg lg:text-2xl">
              <li>
                <strong>Unified Commerce Platform</strong>
              </li>

              <li>
                <strong>Seamless Integration</strong>
              </li>

              <li>
                <strong>Enhanced Customer Relationships</strong>
              </li>

              <li>
                <strong>Optimized Inventory Management</strong>
              </li>

              <li>
                <strong>Data-Driven Insights</strong>
              </li>
            </ul>
            <div className="w-full">
              <button className="mt-4 bg-orange-600 font-semibold py-2 px-8 rounded-xl text-white shadow-md text-lg">
                Contact Us
              </button>
            </div>
          </div>
        }

        {
          // <div className="w-full flex justify-center h-full items-center mt-24">
          //   <div className="circle-container">
          //     <div
          //       className={"icon-circle "}
          //       style={{ transform: `rotate(${rotation}deg)` }}>
          //       {icons.map((item, index) => {
          //         const { x, y } = getIconPosition(index);
          //         return (
          //           <div
          //             key={index}
          //             className={`icon icon${index + 1} ${activeIndex === index ? "spin" : ""
          //               }`}
          //             style={{
          //               transform: `translate(${x}rem, ${y}rem) scale(${activeIndex === index ? 1.5 : 1
          //                 })`,
          //               transition: "transform 0.5s ease",
          //             }}>
          //             <FontAwesomeIcon
          //               icon={item.icon}
          //               className="text-3xl text-center w-full  text-primary"
          //             />
          //           </div>
          //         );
          //       })}
          //     </div>
          //   </div>
          // </div>
        }
      </div>
    </div>
  );
}

export default Spining;
