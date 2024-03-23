"use client"
import { projectsData } from "@/lib/data"
import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { motion } from 'framer-motion'

type projectProps = (typeof projectsData)[number]

export default function Project({title, description, tags, imageUrl}:projectProps){
    
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =  useScroll({
            target: ref,
            offset: ["0 1", "1.33 1"]
        })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1])
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.7,1])

    return (
        <motion.div
        style = {{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}

        ref= {ref}
        className="group mb-3 sm:mb-8 last:mb-0">
            <section 

                        
            className='group relative bg-gray-100 max-w-[42rem] 
                            border border-black/5 rounded-lg overflow-hidden
                            sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 sm:group-even:pl-8
                            hover:bg-grey-200 transition
                            ' >
            <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2
                            sm:pt-10 sm:max-w-[50%] flex flex-col h-full 
                            group-even:ml-[18rem]'>
                <h3 className='text-2xl'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap sm:mt-auto gap-2'>
                    {tags.map((tag, index) =>( 
                        <li className='bg-black/[0.7] px-3 text-[0.7rem] uppercase
                        tracking-wider text-white rounded-full' key = {index}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <Image src = {imageUrl} alt = "Projects I've worked on" quality = {95}
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:right-[initial] group-even:-left-40"
                />

            </div>
            </section>

        </motion.div>
        
    )
}