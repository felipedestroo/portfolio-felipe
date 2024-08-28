import { ABOUT_TEXT } from "../constants"

function About() {
  return <div className=" border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">
        Sobre <span className="text-neutral-500">Mim</span>
    </h2>
    <div className="flex justify-center">
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="">{ABOUT_TEXT}</p>
            </div>
        </div>
    </div>
  </div>
}

export default About