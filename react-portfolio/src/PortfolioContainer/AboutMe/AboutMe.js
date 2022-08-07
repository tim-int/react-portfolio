import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am a career shifter from the BPO industry and decided to pursue my dreams and new career as a software engineer. I'd like to contribute to your organization as a software engineer. Leveraging my ability to develop web applications using readily available web frameworks. With my passion for learning, I will be able to take part in empowering your team with my newly found coding experience gained from extensive hard work at Zuitt coding boot-camp.",
    highlights: {
      bullets: [
        "Full Stack web development",
        "Interactive Front End designing",
        "React and Laravel development",
        "Finished courses for MySQL, NoMySQL",
        "Efficient Database Handling",
        "Built REST API",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
            <button className='btn primary-btn'
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
                        Hire Me
                    </button>
                    <a href='#' download='#'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}