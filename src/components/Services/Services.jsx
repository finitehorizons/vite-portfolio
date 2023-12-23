import "./services.scss";

import { motion } from "framer-motion";

const Services = () => {
    return (
        <motion.div className='services'>
            <motion.div className='textContainer'>
                <p>
                    I build things for the web
                    <br />
                    beautiful, modern, simple
                </p>
                <hr />
            </motion.div>
            <motion.div className='titleContainer'>
                <div className='title'>
                    <h1>
                        <b>Limitless</b> Possibilities
                    </h1>
                </div>
                <div className='title'>
                    <h1>
                        <b></b>
                    </h1>
                </div>
            </motion.div>
            <motion.div className='listContainer'>
                <motion.div
                    whileHover={{
                        background: "#060E3C",
                        filter: "brightness(1.9)",
                    }}
                    className='box'>
                    <img src='/source.png' alt='source' />
                    <h2 className='tech'>Frontend Development</h2>

                    <div className='wrapper'>
                        <div className='section'>
                            <p className='title'>Languages:</p>
                            <ul className='languages'>
                                <li>
                                    <img src='/html.png' alt='' />
                                    <p>HTML</p>
                                </li>

                                <li>
                                    <img src='/js.png' alt='' />
                                    <p>Javascript</p>
                                </li>
                                <li>
                                    <img src='/react.png' alt='' />
                                    <p>React</p>
                                </li>
                                <li>
                                    <img src='/next.png' alt='' />
                                    <p>NextJS</p>
                                </li>
                            </ul>
                            <ul className='languages'>
                                <li>
                                    <img src='/css.png' alt='' />
                                    <p>CSS</p>
                                </li>
                                <li>
                                    <img src='sass.png' alt='' />
                                    <p>Sass</p>
                                </li>
                                <li>
                                    <img src='tailwind.png' alt='' />
                                    <p>Tailwind</p>
                                </li>
                            </ul>
                        </div>
                        <div className='section'>
                            <p className='title'>Tools I Use:</p>
                            <ul className='languages'>
                                <li>
                                    <img src='/vscode.png' alt='' />
                                    <p>VS Code</p>
                                </li>
                                <li>
                                    <img src='/jetbrains.png' alt='' />
                                    <p>Webstorm</p>
                                </li>
                                <li>
                                    <img src='github2.png' alt='' />
                                    <p>Github</p>
                                </li>
                                <li>
                                    <img src='figma.png' alt='' />
                                    <p>Figma</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        background: "#060E3C",
                        filter: "brightness(1.9)",
                    }}
                    q
                    className='box'>
                    <img src='/db96.png' alt='' />
                    <h2 className='tech'> Backend Development</h2>
                    <div className='wrapper'>
                        <div className='section'>
                            <p className='title'>Languages:</p>
                            <ul className='languages'>
                                <li>
                                    <img src='/python.png' alt='' />
                                    <p>Python</p>
                                </li>

                                <li>
                                    <img src='/node.png' alt='' />
                                    <p>NodeJS</p>
                                </li>
                                <li>
                                    <img src='/react.png' alt='' />
                                    <p>MongoDB</p>
                                </li>
                                <li>
                                    <img src='/next.png' alt='' />
                                    <p>NextJS</p>
                                </li>
                            </ul>
                            <ul className='languages'>
                                <li>
                                    <img src='/css.png' alt='' />
                                    <p>CSS</p>
                                </li>
                                <li>
                                    <img src='sass.png' alt='' />
                                    <p>Sass</p>
                                </li>
                                <li>
                                    <img src='tailwind.png' alt='' />
                                    <p>Tailwind</p>
                                </li>
                            </ul>
                        </div>
                        <div className='section'>
                            <p className='title'>Tools I Use:</p>
                            <ul className='languages'>
                                <li>
                                    <img src='/aws.png' alt='' />
                                    <p>AWS</p>
                                </li>
                                <li>
                                    <img src='/pycharm.png' alt='' />
                                    <p>Pycharm</p>
                                </li>
                                <li>
                                    <img src='source.png' alt='' />
                                    <p>Terminal</p>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
