import { FaJava, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiExpress, SiMysql, SiPostman } from "react-icons/si";

const Skills = () => {
    return (
        <div id="skills" className="wrapper mt-5 mb-12">
            <div className="flex-container flex flex-col justify-center pr-8">
                <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                
                {/* Languages */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-center">Languages</h3>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <div className="tooltip tooltip-primary" data-tip="Java">
                            <FaJava className="size-16 m-3 text-red-600 hover:scale-110 transition-transform" />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip="JavaScript">
                            <FaJsSquare className="size-16 m-3 text-yellow-500 hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Frameworks/Libraries */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-center">Frameworks/Libraries</h3>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <div className="tooltip tooltip-primary" data-tip="Spring Boot">
                            <SiSpringboot className="size-16 m-3 text-green-600 hover:scale-110 transition-transform" />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip="React.js">
                            <FaReact className="size-16 m-3 text-blue-400 hover:scale-110 transition-transform" />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip="Node.js">
                            <FaNodeJs className="size-16 m-3 text-green-500 hover:scale-110 transition-transform" />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip="Express.js">
                            <SiExpress className="size-16 m-3 text-gray-700 hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Databases */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-center">Databases</h3>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <div className="tooltip tooltip-primary" data-tip="MySQL">
                            <SiMysql className="size-16 m-3 text-blue-600 hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Tools & Platforms */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-center">Tools & Platforms</h3>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <div className="tooltip tooltip-primary" data-tip="Git">
                            <FaGitAlt className="size-16 m-3 text-orange-600 hover:scale-110 transition-transform" />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip="GitHub">
                            <FaGithub className="size-16 m-3 text-gray-800 hover:scale-110 transition-transform" />
                        </div>
                        <div className="tooltip tooltip-primary" data-tip="Postman">
                            <SiPostman className="size-16 m-3 text-orange-500 hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills