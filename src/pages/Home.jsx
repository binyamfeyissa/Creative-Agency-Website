import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import placeholder from "../img/39.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const bgref = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    // GSAP effect to change body background color
    const el = bgref.current;
    const el2 = triggerRef.current;

    gsap.to(el, {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: el2,
        start: "top center", // Trigger when the top of .second-div reaches the center of the viewport
        end: "bottom center", // Optionally, change back when you scroll past the element
        toggleActions: "play none none reverse",
        markers: true, // To visualize where the trigger starts
      },
    });
  }, []);

  return (
    <div className="all" ref={bgref}>
      <main>
        <div className="frame">
          <h1 className="frame__title">Motion Trail Animations</h1>
          <a
            className="frame__prev"
            href="https://tympanus.net/Tutorials/WebGLLensRefraction/"
          >
            Previous demo
          </a>
          <a
            className="frame__back"
            href="https://tympanus.net/codrops/?p=74079"
          >
            Article
          </a>
        </div>
        <div class="intro">
          <h1 class="intro__title">
            <span class="intro__title-pre">WE CREATE</span>
            <span class="intro__title-sub">From Visions To Reality</span>
          </h1>
          <span class="intro__info">
            Please scroll moderately to fully experience the animations
          </span>
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
      <div className="transition"></div>
      <div className="second-div" ref={triggerRef}></div>
    </div>
  );
};

export default Home;
