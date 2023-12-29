import React from "react";
// import AboutImage from "../../assets/About.jpg";
import Facebook from "../../assets/Facebook.jpg";
import Instagram from "../../assets/Instagram.jpg";
import Whatsapp from "../../assets/Whatsapp.jpg";

// className="container mx-auto

const Card = () => {
  return (
    <>
      {/* <div className="bg-blue-900 my-14"> */}
        <div style={{ width: "50%", margin: "0 auto", padding: "100px 0" }}>
          <div className="text-center">
            <h1 className="text-4xl font-black">My Projects</h1>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-10">
            {/* Repeat this column for each card you want to display */}
            <CardColumn
              imgsrc={Facebook}
              title="Instagram Clone"
              categ="Social Media"
              desc="ConnectME is a social media application that allows users to create
            an account, make posts, and interact with other users. It is built
            using the MERN stack (MongoDB, Express, React, Node.js) and is
            deployed on Heroku."
            />
            <CardColumn
              imgsrc={Instagram}
              title="Whatsapp Clone"
              categ="Social Media"
              desc="ConnectME is a social media application that allows users to create
            an account, make posts, and interact with other users. It is built
            using the MERN stack (MongoDB, Express, React, Node.js) and is
            deployed on Heroku."
            />
            <CardColumn
              imgsrc={Whatsapp}
              title="Github Clone"
              categ="Social Media"
              desc="ConnectME is a social media application that allows users to create
            an account, make posts, and interact with other users. It is built
            using the MERN stack (MongoDB, Express, React, Node.js) and is
            deployed on Heroku."
            />
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

const CardColumn = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="bg-white rounded shadow border border-gray-400">
        <img
          className="w-full h-64 object-cover mb-6 rounded"
          src={props.imgsrc}
          alt="Card Thumbnail"
        />
        <div className="px-3 pb-3">
          <h4 className="text-xl font-semibold mb-3">{props.title}</h4>
          <h5 className="text-gray-500 dark:text-gray-400 mb-3">
            {props.categ}
          </h5>
          <p className="text-gray-500 dark:text-gray-400">{props.desc}</p>
        </div>
        <div className="mt-2 mb-3 px-3">
          <button className="bg-transparent transition-all hover:scale-105 duration-500 text-black font-semibold hover:text-black py-2 px-4 border border-gray-400 hover:border-gray-400 rounded">
            Live Demo
          </button>
          <button className="bg-blue-500 hover:bg-blue-800 transition-all hover:scale-105 duration-500 text-white font-semibold hover:text-white py-2 px-4 ml-3 border border-blue-500 hover:border-transparent rounded">
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
