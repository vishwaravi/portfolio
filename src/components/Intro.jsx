import React from 'react'
import profileImg from '../assets/mydp.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
const Intro = () => {
    return (
        <div id='me' className='wrapper'>
            <div className="hero bg-black min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={profileImg}
                        className="lg:max-w-sm rounded-lg shadow-2xl w-72" />
                    <div>
                        <h1 className="lg:text-5xl font-bold text-3xl">
                            <div id='name-container' className='font-poppins flex flex-col items-center w-auto lg:items-start'>
                                <p>Hi,</p>
                                <p>I'am <span className='text-blue-500'>Vishwa</span></p>
                                <p>a Full Stack Developer</p>
                            </div>
                        </h1>
                        <p className="py-6">
                            a full-stack developer specializing in <span className='bg-blue-600 bg-opacity-40'>Spring Boot and React</span>. I build scalable, user-friendly applications by combining powerful back-end solutions with dynamic front-end experiences. Always eager to learn and grow, I strive to stay updated with the latest tools and trends. Outside of coding, I enjoy playing cricket and watching movies. Feel free to explore my portfolio and get in touch if you'd like to collaborate!
                        </p>
                        <div id='links' className='links flex'>
                            <a href='https://github.com/vishwaravi' target='_blank' rel="noopener noreferrer">
                                <FaGithub className='text-blue-600 size-8 m-2' />
                            </a>
                            <a href='https://linkedin.com/in/vishwaravi45' target='_blank' rel="noopener noreferrer">
                                <FaLinkedin className='text-blue-600 size-8 m-2' />
                            </a>
                            <a href='https://medium.com/@vishwaravi' target='_blank' rel="noopener noreferrer">
                                <FaMedium className='text-blue-600 size-8 m-2' />
                            </a>
                        </div>
                        <a href='/Vishwa_R_FSD.pdf' download='Vishwa_R_resume.pdf'>
                            <button className='mt-4 text-white bg-blue-700 p-3 hover:p-4 transition-all'>Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Intro