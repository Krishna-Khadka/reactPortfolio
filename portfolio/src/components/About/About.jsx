import React from "react";
import AboutImage from "../../assets/About.jpg";

const About = () => {
  return (
    <>
      {/* <div className="flex flex-wrap items-center justify-center">
        <div className="right rounded-[10%] overflow-hidden">
          <img src={AboutImage} style={{ width: "300px" }} alt="About Image" />
        </div>
        <div>
          <h5 className="text-blue-700 font-medium uppercase">about me</h5>
          <h2 className="text-4xl font-bold">
            A dedicated frontend developer based in Itahari Nepal
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-400">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div> */}
      <div
        className="flex flex-wrap items-center justify-center"
        style={{ width: "50%", margin: "0 auto" }}
      >
        <div className="overflow-hidden rounded-2xl" style={{ width: "50%", height: "350px" }}>
          <img
            src={AboutImage}
            alt="About Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="pl-8" style={{ width: "50%" }}>
          <h5 className="text-blue-700 font-black uppercase text-xl">
            about me
          </h5>
          <h2 className="text-3xl font-bold py-2">
            A dedicated frontend developer based in Itahari Nepal
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
