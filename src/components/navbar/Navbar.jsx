import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const variants = {
    initial: {
        transition : {
            staggerChildren: 0.1,
        }
    },
    animate:{
        transition : {
            staggerChildren: .3,
            staggerDirection: 1,
        }
    }
}

const itemVariants = {
    animate: {
        y:0,
        opacity:1,
    },
    initial:{
        y:-50,
        opacity:0,
    }
}

const Navbar = () => {
    return (
        <div className="navbar">
            {/* {Sidebar} */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                 initial={{opacity:0, scale: 0.5}}
                 animate={{opacity:1, scale: 0.5}}
                 transition={{duration:0.5}}
                ><h1>Portifolio</h1></motion.span>
                <motion.div 
                    className="social" 
                    variants={variants} 
                    initial="initial" 
                    animate="animate"
                >
                    <motion.a 
                        href="https://www.linkedin.com/in/witallo/" target="_blank" 
                        variants={itemVariants} 
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                    >
                        <img src="./linkedin.png" alt="linkedin img" />
                    </motion.a>

                    <motion.a 
                       href="https://github.com/WitalloRodrigues" target="_blank" 
                        variants={itemVariants} 
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                    >
                        <img src="./github.jpg" alt="github jpg" />
                    </motion.a>

                    <motion.a 
                        href="https://www.instagram.com/w.i.t.a.l.l.o/" target="_blank"  
                        variants={itemVariants} 
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                    >
                        <img src="./instagram.png" alt="instagram img" />
                    </motion.a>
                    <motion.a 
                        href="#!" 
                        variants={itemVariants} 
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                    >
                        <img src="./whatzapp.png" alt="whatzapp img" />
                    </motion.a>

                </motion.div>
            </div>
        </div>
    )
}

export default Navbar