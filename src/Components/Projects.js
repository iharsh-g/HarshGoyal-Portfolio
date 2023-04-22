import React from 'react'
import './styles/Projects.css'

import Html from '../Images/stack/HTML.png';
import Css from '../Images/stack/CSS.png';
import Javascript from '../Images/stack/Javascript.svg';
import Tailwind from '../Images/stack/Tailwind.png';
import react from '../Images/stack/React.png';
import NodeJs from '../Images/stack/NodeJs.svg';
import Vercel from '../Images/stack/Vercel.svg';
import imagePathProject1 from '../Images/projects/YoutubeClone.png'
import imagePathProject2 from '../Images/projects/Moviepedia.png'

import {AiFillGithub} from 'react-icons/ai';

function Projects() {
  return (
    <div id="projects" class="project-section">
        <h2 class="page-header">Projects</h2>

        <div class="project-container">
        
            {/* <!-- Project 1 --> */}
            <div class="project-card" id="project1" style={{ backgroundImage: `url('${imagePathProject1}')` }}>
                <div class="project-number project-number-right">01</div>
                <div class="project-content project-content-left">
                    <div class="project-skills-container">
                        <img class="project-skill" src={Html} alt="" />
                        <img class="project-skill" src={Css} alt="" />
                        <img class="project-skill" src={Javascript} alt="" />
                        <img class="project-skill" src={Tailwind} alt="" />
                        <img class="project-skill" src={react} alt="" />
                        <img class="project-skill" src={NodeJs} alt="" />
                        <img class="project-skill" src={Vercel} alt="" />
                    </div>
                    <h2 class="project-heading">Youtube Clone</h2>
                    <p class="project-subHeading">
                        Its a youtube clone with the help of Radip API which shows contents related to the video with responsiveness.
                    </p>
                    <div class="btn-group">
                        <a href="https://youtube-clone-iharsh-g.vercel.app" target='blank'>
                            <button class="btn">Check Out</button>
                        </a>
                        <a href="https://github.com/iharsh-g/YoutubeClone" target="blank">
                            <AiFillGithub className='icon'/>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Project 2 --> */}
            <div class="project-card" id="project2" style={{ backgroundImage: `url('${imagePathProject2}')` }}>
                <div class="project-number project-number-left">02</div>
                <div class="project-content project-content-right">
                    <div class="project-skill-container">
                        <img class="project-skill" src={Html} alt="" />
                        <img class="project-skill" src={Css} alt="" />
                        <img class="project-skill" src={Javascript} alt="" />
                        <img class="project-skill" src={Tailwind} alt="" />
                        <img class="project-skill" src={react} alt="" />
                        <img class="project-skill" src={NodeJs} alt="" />
                        <img class="project-skill" src={Vercel} alt="" />
                    </div>
                    <h2 class="project-heading">Moviepedia</h2>
                    <p class="project-sub-heading">
                        A website where we can find any type of movie details, trailers and their cast
                    </p>
                    <div class="btn-group">
                        <a href="https://moviepedia-website.vercel.app/" target='blank'>
                            <button class="btn">Check Out</button>
                        </a>

                        <a href="https://github.com/iharsh-g/MoviepediaWebsite" target='blank'>
                            <AiFillGithub className='icon'/>
                        </a>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Projects