import "./skills.scss"
import { motion } from "framer-motion"


const Skill = ({name, x, y}) => {
    return (
        <motion.div
            className="skill"
            whileHover={{scale:2.05}}
            initial={{x:0, y:0}}
            whileInView = {{x,y}}
            transition={{duration: 2, type:"spring", bounce:0.5}}
            viewport={{once:true}}
        >{name}</motion.div>
    )
} 

const SkillMobile = ({name, x, y}) => {
    return (
        <motion.div
            className="skillMobile"
            whileHover={{scale:2.05}}
            initial={{x:0, y:0}}
            whileInView = {{x,y}}
            transition={{duration: 2, type:"spring", bounce:0.5}}
            viewport={{once:true}}
        >{name}</motion.div>
    )
} 

const Skills = () => {
    return(
        <div className="skills">
            
            
            <div className="stars"></div>
            
            <div className="cilularLight">
                <div className="textContainer">Habilidades</div>
                <div className="planets">
                    <Skill name="WEB" x="-2vw" y="-2vw"/>
                    <Skill name="HTML" x="-20vw" y="2vw"/>
                    <Skill name="CSS" x="-5vw" y="-10vw"/>
                    <Skill name="JavaScript" x="20vw" y="6vw"/>
                    <Skill name="ReactJs" x="0vw" y="12vw"/>
                    <Skill name="Bootstrap" x="-20vw" y="-15vw"/>
                    <Skill name="PHP" x="15vw" y="-12vw"/>
                    <Skill name="Postgree" x="32vw" y="-5vw"/>
                    <Skill name="Motion" x="-40vw" y="10vw"/>
                    <Skill name="SQL" x="-5vw" y="-10vw"/>
                    <SkillMobile name="WEB" x="-47vw" y="-80vw"/>
                    <SkillMobile name="HTML" x="20vw" y="-83vw"/>
                    <SkillMobile name="CSS" x="-20vw" y="-50vw"/>
                    <SkillMobile name="JavaScript" x="10vw" y="70vw"/>
                    <SkillMobile name="ReactJs" x="25vw" y="20vw"/>
                    <SkillMobile name="Bootstrap" x="-40vw" y="65vw"/>
                    <SkillMobile name="PHP" x="-15vw" y="32vw"/>
                    <SkillMobile name="Postgree" x="26vw" y="-35vw"/>
                    <SkillMobile name="Motion" x="-50vw" y="-10vw"/>
                    <SkillMobile name="SQL" x="-11vw" y="-10vw"/>
                </div>
            </div>

        </div>
    )
}

export default Skills