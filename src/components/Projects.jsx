import React from 'react'

const Projects = () => {
    return (
        <div id="projects" className='wrapper mt-5'>
            <div className='projects flex flex-col items-center lg:flex-row lg:grid lg:grid-cols-2'>
                <div className="card bg-primary text-primary-content w-auto m-5">
                    <div className="card-body">
                        <h2 className="card-title">Twitter Spring-Boot</h2>
                        <p>Twitter-like backend REST API built using Spring Boot and Spring Security implemented with JWT authentication.</p>
                        <div className="card-actions justify-end">
                            <a href='https://github.com/vishwaravi/twitter-springboot-api' target='_blank'>
                                <button className="btn">source code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card bg-primary text-primary-content w-auto m-5">
                    <div className="card-body">
                        <h2 className="card-title">Twitter React.js</h2>
                        <p>a social media app with React.js, featuring user authentication, post creation, commenting, and liking, integrated with a RESTful API</p>
                        <div className="card-actions justify-end">
                            <a href='https://github.com/vishwaravi/twitter-react' target='_blank'>
                                <button className="btn">source code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card bg-primary text-primary-content w-auto m-5">
                    <div className="card-body">
                        <h2 className="card-title">2D Pixel Knight Game - GoDot</h2>
                        <p>a 2D pixel art platformer game using the Godot Engine, Focused on smooth gameplay mechanics and engaging visual design.</p>
                        <div className="card-actions justify-end">
                            <a href='https://github.com/vishwaravi/pixel-knight' target='_blank'>
                                <button className="btn">source code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card bg-primary text-primary-content w-auto m-5">
                    <div className="card-body">
                        <h2 className="card-title">Personal Blog - HUGO</h2>
                        <p>a personal blog site using HUGO, a static site generator, with content seamlessly integrated from Obsidian via a custom pipeline.</p>
                        <div className="card-actions justify-end">
                            <a href='https://github.com/vishwaravi/personal-blog-site' target='_blank'>
                                <button className="btn">source code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Projects