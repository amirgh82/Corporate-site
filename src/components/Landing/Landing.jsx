import React from "react";
import "./Landing.css";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import Typewriter from "typewriter-effect";
export default function Landing() {
  return (
    <div className="type-effect">
      <h2 className="type-effect-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("طراحی وب سایت با کدینو")
              .start();
          }}
        />
      </h2>
      <PiArrowBendDownLeftBold className="arrow" />
      <p className="type-effect-desc">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("طراحی سایت شرکتی ، فروشگاهی  و ...")
              .start();
          }}
        />
      </p>
    </div>
  );
}
