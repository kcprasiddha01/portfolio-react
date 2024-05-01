import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="Profilephoto_Upload.jpg" alt="" />
      <h1>
        <span>I'm Prasiddha Jung K.C.,</span> fullstack developer based in
        Nepal.
      </h1>
      <p>
        I am a fullstack developer from Nepalgunj, Nepal currently studying BSc
        CSIT in Patan Multiple Campus, IOST, TU
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume"><a href="Prasiddha-K.C-Resume.pdf" download>My resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
