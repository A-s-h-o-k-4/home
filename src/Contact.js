import React from 'react'
import './Contact.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


function Contact() {
    return (
        <div className='contact'>
            <div className='maincontact'>
                <h4>Contacts</h4>
                <h2>Get in touch</h2>
                <p>ashoknaveenkumar0@gmail.com</p>
            </div>

            <div className='iconfoot'>
                <a href='https://www.linkedin.com/in/ashok-naveen-kumar-a-386807312' className='linked'><FaLinkedin /></a>
                <a href='https://github.com/A-s-h-o-k-4/main-project.git' className='git'><FaGithub /></a>
                <a href='https://www.instagram.com/invites/contact/?igsh=ktvoqq1nifyu&utm_content=kj99ci3' className='insta'><FaInstagram /></a>
            </div>

            <div className='footer'>
                <h5>Copyright@2024. Developed by Ashok Naveen Kumar</h5>
            </div>
        </div>
    )
}

export default Contact