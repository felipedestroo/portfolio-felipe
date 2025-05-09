import { useTranslation } from "react-i18next"

export default function Footer () {

  const currentYear = new Date().getFullYear()
  const { t } = useTranslation();

  return (
      <div className="flex justify-center text-center py-5 w-full">
          <p className="text-sm">© {currentYear} - Felipe Destro. {t("footer.rights")}</p>
      </div>
  )
}