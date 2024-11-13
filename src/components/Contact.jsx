// import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import emailjs from '@emailjs/browser';
import { useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { Toaster } from "react-hot-toast";

function Contact() {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors,setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = t("error.errorName")
    if (!formData.email) {
      errors.email = t("error.errorEmail");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t("error.errorEmailInvalid");
    }
    if (!formData.message) errors.message = t("error.errorMessage");
    return errors;
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    setErrors({});
    setIsSending(true);

      emailjs
        .send(
          "service_v5k3pvf",
          "template_gwrlaqb",
          formData,
          "VLBp9X9VDKmIkpc3-"
        )
        .then(() => {
          toast.success(t("toast.success"));
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log(t("toast.console"), error);
          toast.error(t("toast.error"));
        })
        .finally(() => {
          setIsSending(false);
        });
    } 
  }

   return (
    <div className="border-b border-neutral-900 pb-12 p-4 w-full max-w-4xl mx-auto">
      <Toaster />
      <h2 className="my-8 text-center text-3xl md:text-4xl tracking-tighter">{t("contact.title")}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="w-full sm:w-1/2">
            <input
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              placeholder={t("contact.nameSection")}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-orange-300 px-3 py-2 text-sm
              focus:border-orange-500 focus:outline-none bg-transparent text-white"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full sm:w-1/2">
            <input
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              placeholder={t("contact.emailSection")}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-orange-300 px-3 py-2 text-sm
              focus:border-orange-500 focus:outline-none bg-transparent text-white"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder={t("contact.messageSection")}
            onChange={handleChange}
            className="w-full min-h-[8rem] appearance-none rounded-lg border border-orange-300 px-3 py-2 text-sm
            focus:border-orange-500 focus:outline-none bg-transparent text-white"
            rows={6}
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full rounded border border-orange-500 bg-orange-500
          px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors
          ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? t("contact.sendingButton") : t("contact.sendButton")}
            <FiSend className="w-4 h-4" />
          </div>
        </button>
      </form>
    </div>
  )
}

export default Contact