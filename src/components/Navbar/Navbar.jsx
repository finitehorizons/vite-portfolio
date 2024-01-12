import Sidebar from "../SideBar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

import Reveal from "../Reveal/Reveal";

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar />
            <div className='wrapper'>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{scale: 1.3, color: "rgb(255, 69, 0)"}}>
                        Christopher.dev
                    </motion.span>
                <div className='social'>
                    <a href='https://www.github.com/finitehorizons'>
                        <motion.img src='/github2.png' alt='' whileHover={{scale: 1.9}} transition={{type: "spring"}} />
                    </a>
                    <a href='https://www.linkedin.com/in/finitehorizons/'>
                        <motion.img src='/linkedin.png' alt='' whileHover={{scale: 1.9}} transition={{type: "spring"}} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
