import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import placeholder from "../img/39.jpg";
import Scrollbar from "smooth-scrollbar";
gsap.registerPlugin(ScrollTrigger);
function FrontPage() {
  //   useEffect(() => {
  //     const scrollBar = Scrollbar.init(document.querySelector(".mainn"), {
  //       damping: 0.06,
  //       delegateTo: document,
  //       alwaysShowTracks: false,
  //       speed: 3,
  //     });
  //     ScrollTrigger.defaults({
  //       scroller: ".mainn",
  //     });
  //     ScrollTrigger.scrollerProxy(".mainn", {
  //       scrollTop(value) {
  //         if (arguments.length) {
  //           scrollBar.scrollTop = value;
  //         }
  //         return scrollBar.scrollTop;
  //       },
  //     });

  //     scrollBar.addListener(ScrollTrigger.update);

  //     requestAnimationFrame(() => {
  //       const sectionColor = document.querySelectorAll("[data-bgcolor]");
  //       sectionColor.forEach((colorSection, i) => {
  //         const prevBgColor = i === 0 ? "" : sectionColor[i - 1].dataset.bgcolor;
  //         const prevTextColor =
  //           i === 0 ? "" : sectionColor[i - 1].dataset.textcolor;
  //         ScrollTrigger.create({
  //           trigger: colorSection,
  //           scroller: ".mainn",
  //           start: "top 80%",
  //           end: "bottom 20%",
  //           onEnter: () => {
  //             console.log("Entering section", colorSection.dataset.bgcolor);
  //             gsap.to(".mainn", {
  //               backgroundColor: colorSection.dataset.bgcolor,
  //               color: colorSection.dataset.textcolor,
  //               overwrite: "auto",
  //             });
  //           },
  //           onLeaveBack: () => {
  //             console.log("Leaving section", prevBgColor);
  //             gsap.to(".mainn", {
  //               backgroundColor: prevBgColor,
  //               color: prevTextColor,
  //               overwrite: "auto",
  //             });
  //           },
  //         });
  //       });
  //     });

  //     return () => {};
  //   }, []);
  const GroupRef = useRef([]);

  const onScroll = (el) => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();
        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.body.style.color = styles.group.dataset.txtcolor;
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="mainn">
      <section
        ref={(el) => (GroupRef.current[0] = el)}
        data-bgcolor="#000"
        data-textcolor="#fff"
      >
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
          <div className="intro">
            <h1 className="intro__title">
              <span className="intro__title-pre">WE CREATE</span>
              <span className="intro__title-sub">From Visions To Reality</span>
            </h1>
            <span className="intro__info">
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
      </section>
      <section
        className="transition"
        ref={(el) => (GroupRef.current[1] = el)}
        data-bgcolor="#000"
        data-textcolor="#fff"
      ></section>
      <section
        className="second-div"
        ref={(el) => (GroupRef.current[2] = el)}
        data-bgcolor="#000"
        data-textcolor="#fff"
      ></section>
    </div>
  );
}

export default FrontPage;
