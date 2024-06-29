import React from "react";
import "./achievements.css";

const achievements_data = [
  {
    id: 1,
    title: '',
    timeline: '',
    description1: `Achieved Global Rank - 255 in Starters 138 Division 3(Rated) in CodeChef Among 5000 Participants `,
    description2: `Achieved 5star Badge in Problem Solving At Hackerrank `,
    description3: `Succesfully Solved 300+ Problems On various Coding Platforms`,
    description4: ` Codechef: 1568 Rated`
  }
]

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 className="text-light">Achievements</h2>

      {
        achievements_data.map(({id, title, timeline, description1,description2,description3,description4}) => {
          return(
            <article key={id} className="achievements__card container">
            <div className="timeline"><span className="achievements-dot"></span></div>
            <div className="achievements__content">
              <h3>{title}</h3>
              <h5>{timeline}</h5>
              <p className="ahc-desc">
                {description1}
                <br/>
                {description2}
                <br/>
                {description3}
                <br/>
                {description4}
            


              </p>
            </div>
          </article>
          );
        })
      }
    </section>
  );
};

export default Achievements;
