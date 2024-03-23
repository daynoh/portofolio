
"use client"
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from "@/lib/data"
import Project from './project'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'



export default function Projects() {
    const {setActiveSection} = useActiveSectionContext()
    const {ref, inView} = useInView()
    useEffect(()=>{
        if (inView){
            setActiveSection('Projects')
        }
    },[inView, setActiveSection])
    
  return (
    <section ref={ref}
        id= "projects" className='scroll-mt-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key = {index}>
                    <Project {...project}/>
                    </React.Fragment>
                
            ))}
        </div>
    </section>
   
  )
}

