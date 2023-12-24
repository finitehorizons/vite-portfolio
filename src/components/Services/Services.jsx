import { useRef } from "react";
import "./services.scss";

import { useInView, motion } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-200px" });

    return (
        <motion.div
            className='services'
            variants={variants}
            initial='initial'
            // whileInView='animate'
            ref={ref}
            animate={isInView && "animate"}>
            <motion.div className='textContainer'>
                <p>
                    I build things for the web.
                    <br />
                    modern. simple. beautiful.
                </p>
                <hr />
            </motion.div>
            <motion.div className='titleContainer' variants={variants}>
                <div className='title'>
                    <h1>
                        <motion.b whileHover={{color: "orangered"}}>Limitless</motion.b> Possibilities
                    </h1>
                    <h4>Technologies, Frameworks and Tools</h4>
                </div>
            </motion.div>
            <motion.div className='listContainer' variants={variants}>
                <motion.div
                    whileHover={{
                        background: "#060E3C",
                        filter: "brightness(1.9)",
                    }}
                    className='box'>
                    <img src='/source.png' alt='source' />
                    <h2 className='tech'>FRONT END</h2>

                    <div className='wrapper'>
                        <div className='section'>
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
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        background: "#060E3C",
                        filter: "brightness(1.9)",
                    }}
                    q
                    className='box'
                    variants={variants}>
                    <img src='/db96.png' alt='' />
                    <h2 className='tech'> BACKEND </h2>
                    <div className='wrapper'>
                        <div className='section'>
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
                                    <img src='/mongo.png' alt='' />
                                    <p>MongoDB</p>
                                </li>
                                <li>
                                    <img src='/mysql.png' alt='' />
                                    <p>MySQL</p>
                                </li>
                            </ul>
                            <ul className='languages'>
                                <li>
                                    <img src='/icons8-django-64.png' alt='' />
                                    <p>Django</p>
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
                    className='box'
                    variants={variants}>
                    <img src='/tool96.png' alt='' />
                    <h2 className='tech'> Tools </h2>
                    <div className='wrapper'>
                        <div className='section'>
                            <ul className='languages'>
                                <li>
                                    <img src='/vscode.png' alt='' />
                                    <p>VS Code</p>
                                </li>
                                <li>
                                    <img src='/pycharm.png' alt='' />
                                    <p>Pycharm</p>
                                </li>
                                <li>
                                    <img src='/jetbrains.png' alt='' />
                                    <p>Webstorm</p>
                                </li>
                                <li>
                                    <img src='/aws.png' alt='' />
                                    <p>AWS</p>
                                </li>
                            </ul>
                            <ul className='languages'>
                                <li>
                                    <img src='/github2.png' alt='' />
                                    <p>Github</p>
                                </li>
                                <li>
                                    <img src='/figma.png' alt='' />
                                    <p>Figma</p>
                                </li>
                                <li>
                                    <img src='source.png' alt='' />
                                    <p>Terminal</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
