import React from 'react'
import './styles/Skills.css';

import Html from '../Images/stack/HTML.png';
import Css from '../Images/stack/CSS.png';
import Javascript from '../Images/stack/Javascript.svg';
import Tailwind from '../Images/stack/Tailwind.png';
import react from '../Images/stack/React.png';
import NodeJs from '../Images/stack/NodeJs.svg';
import Vercel from '../Images/stack/Vercel.svg';
import Git from '../Images/stack/Git.svg';
import Github from '../Images/stack/Github.svg';
import blob from '../Images/userAsset/blob vector.png'


function Skills() {
  return (
    <div id="skills" class="container skills-container ">
        <div class="skill-fade-text">Skills</div>

        <div class="skill-container-left">
            <h2 class="skill-heading">
                <span class="caps">M</span>e and
                <br />
                MyTech Stack
            </h2>

            <div class="skill-subHeading">
                <p>
                Hi Everyone My name is Harsh Goyal I am a Full Stack Web Developer I
                have been working for last 5 months in this field and currently I am looking forward for opportunity 
                in this field. Feel free to contact me!
                </p>
                <p>
                I am currently studying in 8th semester of B.Tech in Computer Science and Engineering
                from Jamia Hamdard, I have a knowledge of android development and C++, also having a
                strong hold on core fundamentals of Computer Science.
                </p>
            </div>
        </div>

        <div class="skill-container-right">
            <img src={blob} class="blob-style" alt="" />

            <img src={Html} alt="" class="skills-logo" />
            <img src={Css} alt="" class="skills-logo" />
            <img src={Javascript} alt="" class="skills-logo" />
            <img src={react} alt="" class="skills-logo" />
            <img src={NodeJs} alt="" class="skills-logo" />
            <img src={Tailwind} alt="" class="skills-logo" />
            <img src={Git} alt="" class="skills-logo" />
            <img src={Github} alt="" class="skills-logo" />
            <img src={Vercel} alt="" class="skills-logo" />
            <img src="https://user-images.githubusercontent.com/79085857/141675884-c7eeaece-bf04-4a7e-8de2-cc211d9e4ade.png"
                alt="Not Available" class="skills-logo"/>
            <img src="https://user-images.githubusercontent.com/79085857/141676030-43664b25-0dd4-4199-8d10-ccf8603669de.png"
                alt="Not Available" class="skills-logo"/>
            <img src="https://user-images.githubusercontent.com/79085857/141676139-4997e425-35b3-4d2f-8ab3-8357d093fad9.png"
                alt="Not Available" class="skills-logo firebase-img"/>
        </div>
    </div>
  )
}

export default Skills