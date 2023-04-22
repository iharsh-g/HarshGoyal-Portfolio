import React from 'react'
import './styles/Footer.css'
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai'


function Footer() {
  return (
    <div class="footer-section">
        <div class="footer-container">
            <div class="footer-items-left">
                <div><a href="#projects">Projects</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#contactme">Contact Me</a></div>
            </div>

            <div class="footer-items-right">
                <a href="https://www.linkedin.com/in/harsh-goyal-b3a042190/" target="blank">
                    <AiFillLinkedin className='icon'/>
                </a>
                <a href="https://github.com/iharsh-g" target="blank">
                    <AiFillGithub className='icon'/>
                </a>
                <a href="https://twitter.com/iharsh_g" target="blank">
                    <AiOutlineTwitter className='icon'/>
                </a>
                <a href="https://www.instagram.com/iharsh_g/" target="blank">
                    <AiOutlineInstagram className='icon'/>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harshugoyal02@gmail.com" target="blank">
                    <AiOutlineMail className='icon'/>
                </a>
            </div>

            <div class="footer-faded-text">HARSH GOYAL</div>
        </div>
    </div>
  )
}

export default Footer