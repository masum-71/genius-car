import React from "react";
import image1 from "../../../../assets/images/about_us/person.jpg";
import image2 from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img className="w-4/5" src={image1} alt="" />
          <img
            className="absolute top-1/2 w-2/4 left-1/2 rounded-2xl shadow-lg border-2"
            src={image2}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-orange-500 font-bold text-2xl">About us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience in <br /> this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
