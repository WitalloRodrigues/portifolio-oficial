import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton"
import "./sidebar.scss"
import { useState } from "react"
import { animate, motion } from "framer-motion"

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        Transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        Transition: {
            delay:.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    },
}

const variantsSocial = {
    open: {
        transition : {
            staggerChildren: 0.1,
        }
    },
    closed:{
        transition : {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
}

const itemVariants = {
    open: {
        y:0,
        opacity:1,
    },
    closed:{
        y:50,
        opacity:0,
    }
}

 

const Sidebar = () => {

    const [open,setOpen] = useState(false);

    

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
           <motion.div className="bg" variants={variants}>
                <Links/>

                <motion.div 
                    className="social" 
                    variants={variantsSocial}
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
                        whileTap={{scale:1.95}}
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
                        href="#!" target="_blank" 
                        variants={itemVariants}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                    >
                        <img src="./whatzapp.png" alt="whatzapp img" />
                    </motion.a>

                </motion.div>
           </motion.div>
           <ToggleButton setOpen={setOpen}/>
           
           
        </motion.div>
    )
}

export default Sidebar