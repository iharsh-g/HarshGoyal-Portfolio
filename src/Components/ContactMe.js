import React, { useRef } from 'react'
import './styles/ContactMe.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const serviceId = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`
const templateId = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`
const publicId = `${process.env.REACT_APP_EMAILJS_PUBLIC_ID}`

function ContactMe() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Check all the detailss
        if (name === '' || hasNumber(name)){
            alert('Name must be filled out and must only contain letters');
            return false;
        } else if (email === ''){
            alert('Email must be filled out');
            return false;
        } else if (!(email.includes('@'))){
            alert('Email does not seem to be valid');
            return false;
        } else if (subject === ''){
            alert('Subject must be filled out');
            return false;
        } else if (message === ''){
            alert('Message must be filled out');
            return false;
        } else {
            if(window.confirm("Do you really want to send message")) {

                emailjs.sendForm(serviceId, templateId, form.current, publicId)
                .then((result) => {
                    toast.success("Sent Successfully to harshugoyal02@gmail.com!");
                }, (error) => {
                    console.log(error.text);
                });
             
                e.target.reset();
            }
        }
    }

    function hasNumber(myString) {
        return /\d/.test(myString);
    }

    return (
        <div class="project-section contactMe-section" id="contactme">
            <div class="contactMe-heading">Contact Me</div>
            <div class="contactMe-sub-heading">Questions, Thoughts, Or just want to say Hello?</div>

            <form class="contactMe-form" onSubmit={sendEmail} ref={form}>
                <input type="text" id="name" name="name" placeholder="Enter your Name"/>
                <input type="text" id="email" name="email" placeholder="Enter your email address"/>
                <input type="text" id="subject" name="subject" placeholder="Enter your subject"/>
                <textarea id="message" name="message" rows="10" cols="35" placeholder="Enter your message"/>
                
                <div className='btn-div'>
                    <button type="submit" class="send-button">
                        Send Message
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default ContactMe