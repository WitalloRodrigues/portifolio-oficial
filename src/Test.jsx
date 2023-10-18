import { motion } from "framer-motion"
import { useState } from "react";

const Test = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        visible:{
            opacity:1,
            x:100, 
            transition:{staggerChildren: .2, type:"spring", stiffness:2000, damping:100}
        },
        hidden:{opacity:0},
    };

    const items = ["item1", "item2","item3"];

    return (
        <div className="couser">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map(item => (
                    <motion.li variants={variants} key={item}>{item}</motion.li>
                ))}
                
            </motion.ul>
            
        </div>
    )
}

export default Test