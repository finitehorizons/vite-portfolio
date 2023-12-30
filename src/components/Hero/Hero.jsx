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
                    variants={textVariants}
                    initial='initial'
                    animate='animate'>
                    <motion.h2 variants={textVariants}>
                        Christopher Goodwin
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Web Developer | UX Enthusiast
                    </motion.h1>
                    <div className='buttons'>
                        <motion.a variants={textVariants} href='#Portfolio'>
                            Latest Projects
                        </motion.a>
                        <motion.a variants={textVariants} href='#Contact'>
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
                <motion.div className="aboutTextContainer">
                <h2>Hello World</h2>
                <p>About me Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, nam tenetur earum, aliquam illo minus dolorum eaque ullam distinctio qui molestias. Consequatur nemo labore ullam fugit voluptas maiores incidunt.</p>

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
