import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function Contact() {

  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
          viewport={{ once: true }}
          className="my-10 text-center text-4xl">{t("contact.title")}</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              viewport={{ once: true }}
              className="my-4">{t("contact.address")}</motion.p>
            <motion.p 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
              viewport={{ once: true }}
              className="my-4">{t("contact.phoneNo")}</motion.p>
            <a href="mailto:felipedestrodev@gmail.com" className="border-b">
                {t("contact.email")}
            </a>
        </div>
    </div>
  )
}

export default Contact