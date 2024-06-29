import React from "react";
import "./skills.css";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Bootstrap from "../../assets/bootstrap.png";
import react from "../../assets/react.png";
import Cpp from "../../assets/cpp.svg";
import C from "../../assets/c.png";
import Js from "../../assets/js.jpg";

let web_dev = [
  {
    img_id: 1,
    img: Html,
    img_title: "HTML",
  },
  {
    img_id: 2,
    img: Css,
    img_title: "CSS",
  },
  {
    img_id: 3,
    img: Bootstrap,
    img_title: "BootStrap",
  },
  {
    img_id: 4,
    img: react,
    img_title: "React.js",
  },
];

let prog_lang = [
  {
    img_id: 1,
    img: Cpp,
    img_title: "C++",
  },
  {
    img_id: 2,
    img: C,
    img_title: "C",
  },
  {
    img_id: 3,
    img: Js,
    img_title: "JavaScript",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">
        <h3 className="exp__heading ">Web Development</h3>
        <div className="skill__web">


          {web_dev.map(({img_id, img, img_title }) => {
            return (
              <div key={img_id} className="skill__content">
                <div className="circle">
                  <div className="half-cir">
                    <img src={img} alt="skill image" />
                  </div>
                </div>
                <h4>{img_title}</h4>
              </div>
            );
          })}


        </div>
        <h3 className="exp__heading">Programming Languages</h3>
        <div className="skill__coding">
          {prog_lang.map(({img_id, img, img_title}) => {
            return (
              <div key={img_id} className="skill__content">
                <div className="circle">
                  <div className="half-cir">
                    <img src={img} alt="skill image" />
                  </div>
                </div>
                <h4>{img_title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
