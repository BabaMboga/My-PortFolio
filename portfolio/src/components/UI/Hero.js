import React from "react";
import heroImg from "../../assets/images/hero-removebg.png";
import CountUp from "react-countup";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer 👩‍💻",
      "Full-Stack Developer 💻",
      "Back-end Ninja 🥋",
      "Web Developer 🛠️",
      "Database Expert 📊",
      "Content Writer ✍️",
      "Tech Geek 🤓",
      "Chess Aficionado ♟️",
      "Film Buff 🎥",
      "Sports & Fitness Maven 🏋️‍♂️",
      "Noble Altruist 🌍 🧘‍♂️",
    ],
    loop: true,
    typespeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ============ hero left content ============ */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600]
                    text-[16px]"
            >
              {" "}
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800]
                    text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Ayim William <br /> <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#8873ef"
              />
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                            hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-send-fill"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid
                        border-smallTextColor"
              >
                See portfolio
              </a>
              <a href="/Ayim-William-CV.pdf" download="Ayim-William-CV.pdf">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                                  hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-shake-hands-line"></i> Get Resume
                </button>
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-1 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-line"></i>
              </span>
              I am a passionate and highly motivated full stack software
              engineer with comprehensive training in a wide array of cutting
              edge technologies such as:
            </p>

            <div className=""></div>

            <div className="flex items-center gap-9 mt-14">
              <span className=" text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/ayim-william/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/BabaMboga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/baba_mboga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-twitter-x-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://babamboga.wordpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-wordpress-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://nerdynetwork.slack.com/team/U06CLUXNHMM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-slack-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ============ hero left end ============ */}
          {/* ============ hero img ============ */}
          <div className="flex basis-1/3 mt-10 sm:mt-0 ">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" className="rounded-[8px]" />
            </figure>
          </div>
          {/* ============ hero img end ============ */}
          {/* ================ hero content right ================ */}
          <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
          md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={5} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={3} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1000} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Hours Spent Coding
              </h4>
            </div>
          </div>
          {/* ================ hero content right end ================ */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
