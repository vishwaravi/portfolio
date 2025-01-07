import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import React from 'react'

const Skills = () => {
    return (
        <div id="skills" className="wrapper mt-5 mb-12">
            <div className="flex-container flex flex-col justify-center">
                <div className="grid grid-cols-2 place-items-center lg:grid-cols-6">
                    <div className="tooltip tooltip-primary" data-tip="HTML">
                        <FaHtml5 className="size-16 m-3 mr-20 ml-20 text-blue-600" />
                    </div>
                    <progress className="progress progress-primary w-56" value="80" max="100" />
                    <div className="tooltip tooltip-primary" data-tip="Java">
                        <FaJava className="size-16 m-3 mr-20 ml-20 text-blue-600" />
                    </div>
                    <progress className="progress progress-primary w-56" value="60" max="100" />
                    <div className="tooltip tooltip-primary" data-tip="JavaScript">
                        <FaJsSquare className="size-16 m-3 mr-20 ml-20 text-blue-600" />
                    </div>
                    <progress className="progress progress-primary w-56" value="70" max="100" />
                    <div className="tooltip tooltip-primary" data-tip="Spring Framework">
                        <SiSpring className="size-16 m-3 mr-20 ml-20 text-blue-600" />
                    </div>
                    <progress className="progress progress-primary w-56" value="35" max="100" />
                    <div className="tooltip tooltip-primary" data-tip="Spring Boot">
                        <SiSpringboot className="size-16 m-3 mr-20 ml-20 text-blue-600" />
                    </div>
                    <progress className="progress progress-primary w-56" value="40" max="100" />
                    <div className="tooltip tooltip-primary" data-tip="React.js">
                        <FaReact className="size-16 m-3 mr-20 ml-20 text-blue-600" />
                    </div>
                    <progress className="progress progress-primary w-56" value="40" max="100" />
                </div>
            </div>

        </div>


    )
}

export default Skills