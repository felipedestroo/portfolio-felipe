import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

function About() {
  return <div className=" border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">
        Sobre <span className="text-neutral-500">Mim</span>
    </h2>
    <div className="flex justify-center">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
            <div className="flex justify-center text-center">
                <p className="">{ABOUT_TEXT}</p>
            </div>
        </motion.div>
    </div>
  </div>
}

export default About