import React from "react";
import "./projects.css";

import Project1 from "../../assets/project3.png";
import Project2 from "../../assets/project4.png";
import Project3 from "../../assets/project5.png";

const data = [
  
  {
    id: 1,
    image: Project1,
    title: "PortFolio Website",
    description:
      "Showcased a sleek and modern design with sections highlighting the user's skills, projects, and contact information. The homepage features an introduction, followed by a detailed list of technical skills, notable projects with descriptions and links, and a contact form",
    github: "",
    preview: "",
  },
  {
    id: 2,
    image: Project2,
    title: "Movie Recommendation App",
    description:
      "Designed a user-friendly interface in which users can enter a movie name and get a list of related movies",
    github: "https://github.com/hemantjangid-001/Movie-recomendation",
    preview: "https://hemantjangid-001.github.io/Movie-recomendation/",
  },
  {
    id: 3,
    image: Project3,
    title: "Quizzing Website",
    description:
      "Created a Quizzing website “AVM Quizz” using front-end technologies like React.js and JavaScript having an attractive UI. This provides an interface like “Who wants to be a Millionaire”. It has a user-friendly interface, sound effects, a timer, and different questions",
    github: "https://github.com/hemantjangid-001/AVM-Quiz",
    preview: "https://avm-quizz.netlify.app/",
  },  

];

data.reverse();

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, description, github,preview }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="project image" />
              </div>
              <h3 className="proj-heading">{title}</h3>
              <h5>{description}</h5>
              <div className="link-container">
                <a href={github} className="btn btn-primary">
                  Github
                </a>
                <a href={preview} className="btn ">
                  Preview
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
