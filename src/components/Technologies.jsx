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
            viewport={{ once: true }}
            className="my-20 text-center text-4xl">
                Tech Stacks:
        </motion.h1>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-start justify-center gap-4">
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-cyan-400 flex gap-2 items-center justify-center">
                <RiReactjsFill className="text-3xl text-cyan-400"/>
                <p>React</p>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.2)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-white flex gap-2 items-center justify-center">
                <TbBrandNextjs className="text-3xl text-white"/>
                <p>Next.js</p>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.4)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-yellow-300 flex gap-2 items-center justify-center">
                <SiJavascript className="text-3xl text-yellow-300"/>
                <p>JavaScript</p>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.6)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-blue-400 flex gap-2 items-center justify-center">
                <SiTypescript className="text-3xl text-blue-400"/>
                <p>TypeScript</p>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.8)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-cyan-300 flex gap-2 items-center justify-center">
                <SiTailwindcss className="text-3xl text-cyan-300"/>
                <p>Tailwind</p>
            </motion.div>
            <motion.div 
                variants={iconVariants(3.0)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-green-500 flex gap-2 items-center justify-center">
                <SiNodedotjs className="text-3xl text-green-500"/>
                <p>Node.js</p>
            </motion.div>
            <motion.div 
                variants={iconVariants(3.2)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-white flex gap-2 items-center justify-center">
                <SiMysql className="text-3xl"/>
                <p>MySQL</p>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies