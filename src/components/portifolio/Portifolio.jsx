import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import "./portifolio.scss"
import { useRef } from "react"

const items = [
    {
        id:1,
        title:"PlayMusicMoment",
        img:"https://images.pexels.com/photos/11464419/pexels-photo-11464419.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc:"Projeto  de playlist de musicas feito em React."
    },
    {
        id:2,
        title:"PlayMoviesMoment",
        img:"https://images.pexels.com/photos/11464419/pexels-photo-11464419.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc:"Projeto serviço online de streaming consumindo api's de filmes em React."
    },
    
]

const Single = ({item}) => {
    
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ["start start","end start"]
    })

    const y = useTransform(scrollYProgress,[0,1], [-100,100])

    return (
        <section  >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.id} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button style={{background:"gray"}}>Em Cosntrução</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portifolio = () =>{

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["end end","start start"]
    })

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })

    return(
        <div className="portifolio" ref={ref}>
            <div className="progress">
                <h1>Projetos</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
           {items.map(item=>(
            <Single item={item} key={item.id}/>
           ))}
        </div>
    )
}

export default Portifolio