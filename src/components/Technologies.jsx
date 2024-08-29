import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -4.5 },
    animate: {
        y: [4.5, -4.5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }} 
            className="my-20 text-center text-4xl">
                Tech Stacks:
        </motion.h1>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-start justify-center gap-4">
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsFill className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-5xl"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-5xl text-yellow-300"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-5xl text-blue-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-5xl text-cyan-300"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNodedotjs className="text-5xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3.2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-5xl"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies