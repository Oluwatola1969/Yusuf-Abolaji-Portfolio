import React from "react";
import "./about.css";
import cv from '../../assets/cv.pdf';
import aboutimg from '../../assets/nosvg.png';
import {HiOutlineDownload} from "react-icons/hi";
import {MdPeopleOutline} from 'react-icons/md';
import {BsPatchCheck} from 'react-icons/bs'
import {SlBadge} from 'react-icons/sl';
import {motion} from 'framer-motion'


export const About = () => {
  return (
    <motion.section id="about" >
        <div className="container about__container">
          <div className="about__title"><h2>About <span>Me</span></h2>
            <h5>Introduction</h5>
          </div>
          <div className="about__content">
            <div className="about__img">
              <img src={aboutimg} alt="" />
            </div>

            <div className="about__me left">
              <div className="about__cards">
                <div className="card__about">
                  <div className="icon__about">
                    <SlBadge/>
                  </div>
                  <h4>Experience</h4>
                  <h6>4+ Years working</h6>
                </div>
                <div className="card__about">
                  <div className="icon__about">
                    <BsPatchCheck/>
                  </div>
                  <h4>Completed</h4>
                  <h6>10+ Projects</h6>
                </div>
                <div className="card__about">
                  <div className="icon__about">
                     <MdPeopleOutline/>
                  </div>
                  <h4>client</h4>
                  <h6>32+ clients</h6>
                </div>
              </div>

              <p className="about__me_text">Yusuf Abolaji is a fortified Product Manager whose goal is to focus on creating and managing products that solves real problems for users.<br/> In a world where customer needs are constantly evolving and competition is fierce, some businesses can't really afford to waste resources on products that don't hit the mark.
                That’s why I have a mission to steer products towards success and ensure they meet user needs and also achieve business goals.</p>

              <div className="about__btn">
                <a href={cv}download className="btn">Download CV <HiOutlineDownload className="about__icon"/></a>
              </div>
            </div>


          </div>


        </div>
    </motion.section>
  );
};
