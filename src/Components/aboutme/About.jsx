import React from "react";
import "./about.css";

export const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
          <div className="about__title"><h2>About <span>Me</span></h2>
            <h5>Introduction</h5>
          </div>
          <div className="about__content">
            <div className="about__img">

            </div>

            <div className="about__me left">
              <div className="about__cards">
                <div className="card__about">
                  <div className="icon__about">

                  </div>
                  <h4>Experience</h4>
                  <h6>6+ Years working</h6>
                </div>
                <div className="card__about">
                  <div className="icon__about">

                  </div>
                  <h4>Completed</h4>
                  <h6>10+ Projects</h6>
                </div>
                <div className="card__about">
                  <div className="icon__about">

                  </div>
                  <h4>client</h4>
                  <h6>32+ clients</h6>
                </div>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam! Necessitatibus voluptatum ipsum earum error, perferendis eius in enim modi nisi magni? Officiis, similique. Voluptas nobis culpa illum magni nostrum, omnis voluptatem.</p>

              <div className="about__btn">
                <a href="" download>Download CV</a>
              </div>
            </div>


          </div>


        </div>
    </section>
  );
};
