import React from 'react'
import './styles/HeroSection.css'
import dots from '../Images/userAsset/dots.png'
import cube from '../Images/userAsset/cube.png'
import circle from '../Images/userAsset/circle.png'
import zigzag from '../Images/userAsset/zigzags.png'
import plus from '../Images/userAsset/plus.png'
import userImage from '../Images/userAsset/userImage.jpg'
import { Typewriter } from 'react-simple-typewriter'

function HeroSection() {
    return (
        <div class="hero-section">
            <div class="faded-text">Harsh Goyal</div>

            <div class="hero-section-left">
                <div class="hero-section-heading">Hi! I’m Harsh Goyal</div>
                <div class="hero-section-heading hero-section-sub-heading">
                    I am a {' '}
                    <span class="role">
                        {
                            <Typewriter words={["Full Stack Developer", "Web Developer", "Backend Developer", "Frontend Developer", "Coder"]}
                                cursor
                            />
                        }
                    </span>
                </div>
                <div class="hero-section-description">
                    I’m undergrad in B.Tech(CSE) from Jamia Hamdard and here is my portfolio website. Here you’ll
                    learn about my journey as an engineer.
                </div>
                <div>
                    <a href="#contactme">
                        <div class="btn">Hire me</div>
                    </a>
                </div>
            </div>

            <div class="hero-section-right">
                <div class="absolute icons icon-dots">
                    <img src={dots} alt="" />
                </div>
                <div class="absolute icons icon-cube">
                    <img src={cube} alt="" />
                </div>
                <div class="absolute icons icon-circle">
                    <img src={circle} alt="" />
                </div>
                <div class="absolute icons icon-zigzag">
                    <img src={zigzag} alt="" />
                </div>
                <div class="absolute icons icon-plus">
                    <img src={plus} alt="" />
                </div>
                <div class="user-image">
                    <img src={userImage} alt="" />
                </div>
            </div>

        </div>
    )
}

export default HeroSection