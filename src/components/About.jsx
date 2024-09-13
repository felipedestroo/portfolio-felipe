import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function About() {
  const { t } = useTranslation();

  return <div className=" border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">
        {t("about.title1")} <span className="text-neutral-500">{t("about.title2")}</span>
    </h2>
    <div className="flex justify-center">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2">
            <div className="flex justify-center lg:text-center">
                <p className="">{t("about.text")}</p>
            </div>
        </motion.div>
    </div>
  </div>
}

export default About