import { motion } from "framer-motion"
import profilePic from "../assets/FelipeDestroProfile.png"
import { HERO_CONTENT } from "../constants"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Felipe Destro
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-orange-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Front-End Developer
                        </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    <motion.button 
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="mb-0 bg-transparent rounded-md p-2 hover:bg-transparent hover:text-orange-500 hover:duration-100 hover:border-orange-800 hover:border-2">
                        <a href="Felipe-Destro-Resume.pdf" target="_blank">Download CV</a>
                    </motion.button>
                </div>
            </div>
            <div className="w-min lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{ x: 100, opacity: 0}}
                        animate={{ x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1}}
                        className="rounded-md w-auto h-auto" 
                        src={profilePic} 
                        alt="Profile Pic"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero