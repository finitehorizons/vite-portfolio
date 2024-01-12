import { useRef } from "react";
import "./services.scss";

import skillsData from "./skillsdata.json";

import { useInView, motion } from "framer-motion";

import Reveal from "../Reveal/Reveal";

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
        <div>
            <motion.div
                className='services'
                variants={variants}
                initial='initial'
                whileInView='animate'
                ref={ref}
                animate={"animate"}>
                <motion.div className='textContainer'>
                    <p>
                        I build things for the web.
                        <br />
                        <Reveal>
                            <motion.span whileHover={{ scale: 1.1 }}>
                                <strong>modern.</strong>{" "}
                                <strong>simple.</strong>{" "}
                                <strong>beautiful.</strong>
                            </motion.span>
                        </Reveal>
                    </p>
                    <hr />
                </motion.div>
                <motion.div className='titleContainer' variants={variants}>
                    <div className='title'>
                        <h1>
                            <motion.b whileHover={{ color: "rgb(255, 69, 0)" }}>
                                Tools
                            </motion.b>{" "}
                            I have Worked With
                        </h1>
                        <h4>Technologies, Frameworks and Tools</h4>
                    </div>
                </motion.div>
                <div className='skills-container'>
                    {skillsData.map((skill, index) => (
                        <div key={index} className='skill-item'>
                            <img src={skill.icon} alt={skill.icon} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
