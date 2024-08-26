import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import placeholder from "../img/39.jpg";
gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      // When scrolling down (entering a new section)
      ScrollTrigger.create({
        trigger: section,
        start: "top center", // Trigger when the top of the section reaches the center
        end: () => "+=" + section.clientHeight, // Keep the trigger active for the duration of the section's height
        onEnter: () => {
          const bgColor = section.getAttribute("data-bg");
          const textColor = section.getAttribute("data-textcolor");
          gsap.to("body", {
            backgroundColor: bgColor,
            color: textColor,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          const bgColor =
            sectionsRef.current[index - 1]?.getAttribute("data-bg");
          const textColor =
            sectionsRef.current[index - 1]?.getAttribute("data-textcolor");
          if (bgColor && textColor) {
            gsap.to("body", {
              backgroundColor: bgColor,
              color: textColor,
              duration: 1,
            });
          }
        },
      });

      // When scrolling up (leaving the current section)
      ScrollTrigger.create({
        trigger: section,
        start: "bottom center", // Trigger when the bottom of the section reaches the center
        onEnterBack: () => {
          const bgColor = section.getAttribute("data-bg");
          const textColor = section.getAttribute("data-textcolor");
          gsap.to("body", {
            backgroundColor: bgColor,
            color: textColor,
            duration: 1,
          });
        },
        onLeave: () => {
          const bgColor =
            sectionsRef.current[index + 1]?.getAttribute("data-bg");
          const textColor =
            sectionsRef.current[index + 1]?.getAttribute("data-textcolor");
          if (bgColor && textColor) {
            gsap.to("body", {
              backgroundColor: bgColor,
              color: textColor,
              duration: 1,
            });
          }
        },
      });
    });
  }, []);

  return (
    <div className="container">
      <section
        data-bg="#EFE7D7"
        data-textcolor="#FF4000"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="section1"
      >
        <main>
          <div className="frame">
            <h1 className="frame__title">Motion Trail Animations</h1>
          </div>
          <div className="intro">
            <h1 className="intro__title">
              <span className="intro__title-pre new-amsterdam-regular">
                LET US CREATE YOUR BRAND
              </span>
              <span className="intro__title-sub edu-vic-wa-nt-beginner">
                Lasting first impressions
              </span>
            </h1>
            <span className="intro__info">Scroll for more information</span>
          </div>
          <div className="content">
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
            <div className="content__img">
              <div
                className="content__img-inner"
                style={{ backgroundImage: `url(${placeholder})` }}
              ></div>
            </div>
          </div>
        </main>
      </section>
      <section
        data-bg="#FF4000"
        data-textcolor="#EFE7D7"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="section2"
      >
        <h1>Second Section</h1>
        <div className="services">
          <div className="services-header">
            <div className="col"></div>
            <div className="col">
              <h1>All Services</h1>
            </div>
          </div>

          <div className="service">
            <div className="service-info">
              <h1>lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur deserunt a cupiditate.
              </p>
            </div>
            <div className="service-img">
              <div className="img">
                <img src={placeholder} alt="" />
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-info">
              <h1>lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur deserunt a cupiditate.
              </p>
            </div>
            <div className="service-img">
              <div className="img">
                <img src={placeholder} alt="" />
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-info">
              <h1>lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur deserunt a cupiditate.
              </p>
            </div>
            <div className="service-img">
              <div className="img">
                <img src={placeholder} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bg="#EFE7D7"
        data-textcolor="#FF4000"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="section3"
      >
        <h1>Third Section</h1>
      </section>
    </div>
  );
};

export default Test;
