import React from 'react'
import Hword from '../Images/userAsset/Hword.png'
import './styles/Navbar.css'
import {AiOutlineBars} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx';

function Header({sideBarOpen, setSideBarOpen}) {
  return (
    <div class="navBar">
        <div class="logo-container">
            <img src={Hword} alt='' class="logo"/>
            <div class="logo-text">arsh Goyal</div>
        </div>

        <div class="nav-items">
            <div><a href="#projects">Projects</a></div>
            <div><a href="#skills">Skills</a></div>
            <div><a href="#contactme">Contact Me</a></div>
            {
              sideBarOpen ? 
              <RxCross1 id='cross' onClick={() => setSideBarOpen(false)}/> :
              <AiOutlineBars id='bars' onClick={() => setSideBarOpen(true)}/>
            }
         </div>
    </div>
  )
}

export default Header