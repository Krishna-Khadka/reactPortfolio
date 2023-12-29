import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import profileImage from "../../assets/profile.jpg";

const Home = () => {
  const homeStyle = {
    width: "80%",
    margin: "0 auto",
    padding: "150px 0",
  };
  return (
    <>
      <div
        className="flex flex-wrap items-center justify-center gap-28"
        style={homeStyle}
      >
        <div>
          <h1 className="text-6xl font-bold text-black leading-[65px]">
            Hi There !! <br /> I am <span className="text-blue-700">Krishna</span>
          </h1>
          {/* <p className="font-semibold p-2" style={{ fontSize: "1rem" }}>
            Hey There !! I am Krishna Khadka <br />
            A passionate Frontend React Developer
          </p> */}
          <p className="text-2xl font-bold text-black py-2">Front End React Developer</p>
          <ul>
            <li className="inline-block text-3xl pl-2"><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li className="inline-block px-5 text-3xl"><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className="inline-block text-3xl"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </div>
        <div className="right rounded-[50%] overflow-hidden">
          <img
            src={profileImage}
            style={{ width: "300px" }}
            alt="Profile Image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
