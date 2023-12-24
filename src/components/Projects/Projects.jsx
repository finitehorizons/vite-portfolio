import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import "./projects.scss"

const items = [
    {
        id: 1,
        title: "E-Commerce",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--kx2t5NRH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/basir/amazona/raw/master/template/images/amazona.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste, rerum nulla eius tempora eum molestias ut, fuga saepe obcaecati aperiam vero facere hic? Natus cum ipsam eaque rerum ratione?",
    },
    {
        id: 2,
        title: "NextJS",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--kx2t5NRH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/basir/amazona/raw/master/template/images/amazona.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste, rerum nulla eius tempora eum molestias ut, fuga saepe obcaecati aperiam vero facere hic? Natus cum ipsam eaque rerum ratione?",
    },
    {
        id: 3,
        title: "Space Design",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--kx2t5NRH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/basir/amazona/raw/master/template/images/amazona.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste, rerum nulla eius tempora eum molestias ut, fuga saepe obcaecati aperiam vero facere hic? Natus cum ipsam eaque rerum ratione?",
    },
    {
        id: 4,
        title: "Chat App",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--kx2t5NRH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/basir/amazona/raw/master/template/images/amazona.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste, rerum nulla eius tempora eum molestias ut, fuga saepe obcaecati aperiam vero facere hic? Natus cum ipsam eaque rerum ratione?",
    },
];

const Single = ({ item }) => {
    return <section>{item.title}</section>;
};

const Projects = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='projects' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div className='progressBar' style={{scaleX}}></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Projects;
