import "./hero.scss"
import { motion } from "framer-motion";

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition: {
            duration:1,
            staggerChildren: .1,
        }
    },
    scrollButton: {
        opacity:0,
        y:20,
        transition : {
            duration:2,
            repeat: Infinity,
        }

    }
}

const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration:10,
        }
    },
}

const perfilVariants = {
    initial:{
        y: 1200,
        opacity:0,
    },
    animate:{
        y: 0,
        opacity:1,
        transition: {
            duration:1,
        }
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Witallo Rodrigues</motion.h2>
                    <motion.h1 variants={textVariants}>Desenvolvedor FullStack</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        
                        <a href="./curriculo.pdf" target="_blank"><motion.button variants={textVariants}>Meu curriculo</motion.button> </a>
                        <a href="#Orçamento"><motion.button variants={textVariants}>Faça seu orçamento</motion.button></a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll img" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
                Witallo Portifolio
            </motion.div>
            <motion.div className="imageContainer"  variants={perfilVariants} initial="initial" animate="animate">
                <img src="/astronauta.png" alt="eu img" />
            </motion.div>
        </div>
    )
}

export default Hero