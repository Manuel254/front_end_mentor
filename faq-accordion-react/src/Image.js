import React from "react";
import backgroundDesktop from "./images/bg-pattern-desktop.svg";
import boxDesktop from "./images/illustration-box-desktop.svg";
import womanDesktop from "./images/illustration-woman-online-desktop.svg";

const Images = () => {
  return (
    <section>
      <img
        className="background-pattern"
        src={backgroundDesktop}
        alt="background pattern"
      />
      <img className="box-svg" src={boxDesktop} alt="box" />
      <img src={womanDesktop} className="woman-desktop" alt="woman" />
    </section>
  );
};

export default Images;
