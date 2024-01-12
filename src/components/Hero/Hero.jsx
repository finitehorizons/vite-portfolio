import Reveal from "../Reveal/Reveal";
import "./hero.scss";

import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollAnimation: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-1215%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 75,
        },
    },
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div
                    className='textContainer'
                    initial='initial'
                    animate='animate'>
                    <Reveal>
                        <motion.h2
                            transition={{ type: "spring" }}
                            whileHover={{ rotate: -5 }}>
                            <span style={{color: "rgb(255,69,0)"}}>hello</span>,
                            <br /> my <span style={{color: "rgb(255,69,0)"}}>name</span> is <span style={{color: "rgb(255,69,0)"}}>CHRIS</span>
                            <span style={{ color: "rgb(255, 69, 0)" }}>.</span>
                        </motion.h2>
                    </Reveal>

                    <Reveal>
                        <motion.h1
                            variants={textVariants}
                            whileHover={{ rotate: 8 }}
                            style={{ color: "rgb(255, 69, 0" }}>
                            Web Developer
                        </motion.h1>
                    </Reveal>
                    <Reveal>
                        <motion.h1
                            variants={textVariants}
                            transition={{ type: "spring" }}
                            whileHover={{ rotate: -5 }}>
                            UX/UI Enthusiast
                        </motion.h1>
                    </Reveal>
                    <div className='buttons'>
                        <motion.a
                            variants={textVariants}
                            whileHover={{ scale: 1.1, rotate: -8 }}
                            transition={{ type: "spring" }}
                            href='#Portfolio'>
                            Latest Projects
                        </motion.a>
                        <motion.a
                            variants={textVariants}
                            whileHover={{ scale: 1.1, rotate: -8 }}
                            transition={{ type: "tween" }}
                            href='#Contact'>
                            Contact Me
                        </motion.a>
                    </div>
                    <motion.img
                        src='/scroll.png'
                        alt=''
                        variants={textVariants}
                        animate='scrollAnimation'
                    />
                </motion.div>
                <motion.div
                    className='aboutTextContainer'
                    initial='initial'
                    animate='animate'>
                    <Reveal>
                        <p>
                            I'm a passionate{" "}
                            <motion.span
                                whileHover={{ 
                                    color: "rgb(255, 69, 0)",
                                }}
                                transition={{ type: "just" }}>
                                web developer
                            </motion.span>{" "}
                            committed to building sleek, functional, and
                            user-friendly digital experiences. Driven by a
                            desire for excellence, I focus on creating products
                            that not only meet but{" "}
                            <motion.span
                                whileHover={{ color: "rgb(255, 69, 0)" }}>
                                exceed expectations
                            </motion.span>
                            . My goal is to contribute{" "}
                            <strong>impactful </strong>
                            solutions to the web development landscape by
                            prioritizing simplicity and performance. Excited
                            about the endless possibilities in this field, I'm{" "}
                            <motion.span
                                whileHover={{ color: "rgb(255, 69, 0)" }}>
                                dedicated{" "}
                            </motion.span>{" "}
                            to honing my skills to make a meaningful impact.
                        </p>
                    </Reveal>
                </motion.div>
            </div>

            <motion.div
                className='slidingTextContainer'
                variants={sliderVariants}
                initial='initial'
                animate='animate'>
                Front-End | Back-End | UX | UI | Passionate | Self-Starter
            </motion.div>
        </div>
    );
};

export default Hero;
