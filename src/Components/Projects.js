import React from 'react'
import './styles/Projects.css'

import Html from '../Images/stack/HTML.png';
import Css from '../Images/stack/CSS.png';
import Javascript from '../Images/stack/Javascript.svg';
import Tailwind from '../Images/stack/Tailwind.png';
import react from '../Images/stack/React.png';
import NodeJs from '../Images/stack/NodeJs.svg';
import MongoDB from '../Images/stack/MongoDB.svg';
import Express from '../Images/stack/Express.png';
import Redux from '../Images/stack/Redux.svg';
import Vercel from '../Images/stack/Vercel.svg';
import imagePathProject1 from '../Images/projects/StudyNotion.png'
import imagePathProject2 from '../Images/projects/Ecommerce.png'
import imagePathProject3 from '../Images/projects/Dalle Image.png'

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
                        <img class="project-skill" src={Redux} alt=''/>
                        <img class="project-skill" src={MongoDB} alt="" />
                        <img class="project-skill" src={Express} alt="" />
                        <img class="project-skill" src={react} alt="" />
                        <img class="project-skill" src={NodeJs} alt="" />
                        <img class="project-skill" src={Vercel} alt="" />
                    </div>
                    <h2 class="project-heading">StudyNotion</h2>
                    <p class="project-subHeading">
                        An Ed Tech Platform built with MERN Stack, Instructor can create the course, Students can buy the course with Razaorpay Integration
                    </p>
                    <div class="btn-group">
                        <a href="https://github.com/iharsh-g/StudyNotion" target='blank'>
                            <button class="btn">Check Out</button>
                        </a>
                        {/* <a href="Github Link and paste deployed link" target="blank">
                            <AiFillGithub className='icon'/>
                        </a> */}
                    </div>
                </div>
            </div>

            {/* project 2 */}
            <div class="project-card" id="project2" style={{ backgroundImage: `url('${imagePathProject2}')` }}>
                <div class="project-number project-number-left">02</div>
                <div class="project-content project-content-right">
                    <div class="project-skill-container">
                        <img class="project-skill" src={Html} alt="" />
                        <img class="project-skill" src={Css} alt="" />
                        <img class="project-skill" src={Javascript} alt="" />
                        <img class="project-skill" src={Tailwind} alt="" />
                        <img class="project-skill" src={Redux} alt=''/>
                        <img class="project-skill" src={MongoDB} alt="" />
                        <img class="project-skill" src={Express} alt="" />
                        <img class="project-skill" src={react} alt="" />
                        <img class="project-skill" src={NodeJs} alt="" />
                        <img class="project-skill" src={Vercel} alt="" />
                    </div>
                    <h2 class="project-heading">Ecommerce Website</h2>
                    <p class="project-subHeading">
                        An online e-commerce platform where user can buy the products and review them, admin can do CRUD operations with products
                    </p>
                    <div class="btn-group">
                        <a href="https://github.com/iharsh-g/Ecommerce-website" target='blank'>
                            <button class="btn">Check Out</button>
                        </a>
                        {/* <a href="GitHub Link" target="blank">
                            <AiFillGithub className='icon'/>
                        </a> */}
                    </div>
                </div>
            </div>

            {/* <!-- Project 3 --> */}
            <div class="project-card" id="project1" style={{ backgroundImage: `url('${imagePathProject3}')` }}>
                <div class="project-number project-number-right">03</div>
                <div class="project-content project-content-left">
                    <div class="project-skill-container">
                        <img class="project-skill" src={Html} alt="" />
                        <img class="project-skill" src={Css} alt="" />
                        <img class="project-skill" src={Javascript} alt="" />
                        <img class="project-skill" src={Tailwind} alt="" />
                        <img class="project-skill" src={Redux} alt=''/>
                        <img class="project-skill" src={MongoDB} alt="" />
                        <img class="project-skill" src={Express} alt="" />
                        <img class="project-skill" src={react} alt="" />
                        <img class="project-skill" src={NodeJs} alt="" />
                        <img class="project-skill" src={Vercel} alt="" />
                    </div>
                    <h2 class="project-heading">Dalle Image Generator</h2>
                    <p class="project-subHeading">
                        It uses Dalle.E Api go generate unique images. Combine with MERN stack where the images can be post online.
                    </p>
                    <div class="btn-group">
                        <a href="https://github.com/iharsh-g/Dalle-Image-Generator" target='blank'>
                            <button class="btn">Check Out</button>
                        </a>

                        {/* <a href="GItHub Link" target='blank'>
                            <AiFillGithub className='icon'/>
                        </a> */}
                    </div>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Projects