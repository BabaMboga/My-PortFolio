import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiuxImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";
import cssImg from "../../assets/images/project-icons/css-3.png";
import htmlImg from "../../assets/images/project-icons/html-5.png";
import flaskImg from "../../assets/images/project-icons/icons8-flask.svg";
import javascriptImg from "../../assets/images/project-icons/icons8-javascript.svg";
import reactImg from "../../assets/images/project-icons/icons8-react.svg";
import tailwindCssImg from "../../assets/images/project-icons/icons8-tailwindcss.svg";
import javaImg from "../../assets/images/project-icons/java.png";
import jsImg from "../../assets/images/project-icons/js.png";
import pythonImg from "../../assets/images/project-icons/python.png";
import reactImg2 from "../../assets/images/project-icons/react.png";
import sqlImg from "../../assets/images/project-icons/sql-server.png";

const Services = () => {
  // Create an array of icon elements
  const slideShowIcons = [
    <img src={cssImg} alt="CSS" />,
    <img src={htmlImg} alt="HTML" />,
    <img src={flaskImg} alt="Flask" />,
    <img src={javascriptImg} alt="JavaScript" />,
    <img src={reactImg} alt="React" />,
    <img src={tailwindCssImg} alt="Tailwind CSS" />,
    <img src={javaImg} alt="Java" />,
    <img src={jsImg} alt="JS" />,
    <img src={pythonImg} alt="Python" />,
    <img src={reactImg2} alt="React" />,
    <img src={sqlImg} alt="SQL" />,
  ];

  // Settings for slider component set
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4 rem] mb-5">
            What do I help?
          </h2>
          <p>
            As a seasoned developer, I offer expertise in a variety of
            technologies, specializing in frontend and backend development,
            UI/UX design and more. My skills span a variety of technologies,
            frameworks and libraries like:
          </p>
          <Slider
            {...sliderSettings}
            className=" flex items-center px-20 mt-4 mr-15 pt-5 "
          >
            {slideShowIcons.map((icon, index) => (
              <div key={index} className="icon-slide">
                {icon}
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ================ vertical line running through the middle ================ */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

              {/* ================= left card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-indigo-300 cursor-pointer 
                                        ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl"
                        >
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Building the backbone of robust applications with
                          server-side technologies. From database management to
                          server logic implementation, my backend development
                          skills ensure the seamless fucntionality and
                          performance of web applications.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* =============== right card =============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-indigo-300 cursor-pointer 
                                        ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl"
                        >
                          UI/UX Design
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Crafting intuitive and visually stunning user
                          experiences that resonate with users. From wireframes
                          to interactive prototypes, my UI/UX design skills
                          focus on creating engaging and user-centric digital
                          products.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={uiuxImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ================= left card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group  hover:bg-indigo-300 cursor-pointer 
                                        ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl"
                        >
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Transforming designs into pixel-perfect, user-friendly
                          interfaces using cutting-edge technologies. Elevate
                          the user experience through responsive and visually
                          appealing frontend development.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* =============== right card =============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group  hover:bg-indigo-300 cursor-pointer 
                                        ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl"
                        >
                          Agile Methodology
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Embracing an agile approach to project management,
                          ensuring flexibility and collaboration. Iterative
                          develpoment cycles, constant communication, and
                          adaptability are key aspects of my methodology,
                          resulting in succesful and client-centric outcomes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
