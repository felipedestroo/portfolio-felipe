import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Tech Stacks:</h1>
        <div className="flex flex-wrap items-start justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsFill className="text-5xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-5xl"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-5xl text-yellow-300"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-5xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-5xl text-cyan-300"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNodedotjs className="text-5xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-5xl"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies