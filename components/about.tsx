/* eslint-disable react/no-unescaped-entities */


'use client'

import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
export default function About() {
    const {ref} = useSectionInView('About',0.95)
  
  return (
    <motion.section
        ref = {ref}
        id="about" 
        className='mb-28 max-w[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial = {{ opacity : 0, y : 100}}
        animate = {{ opacity : 1, y: 0}}
        transition={{delay: 0.175}}>
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        Driven by a passion for technology and fueled by data, I'm on a constant quest for innovation. My journey began with a cybersecurity bootcamp, where I dived into the world of ethical hacking. Continuing my quest for knowledge, I pursued a degree in Actuarial Science, laying the foundation for my analytical skills. Venturing into machine learning and deep learning, I explored diverse domains, mastering techniques such as natural language processing and reinforcement learning. As a part-time research collaborator, I contributed to cutting-edge projects, refining my abilities in model development and interdisciplinary collaboration. Today, as a freelance full-stack developer, I specialize in crafting data-driven solutions that leverage the power of machine learning to drive impactful outcomes. My core stack
        is{" "}
        <span className="font-medium">
          Python,React, Next.js, Node.js, and MySql
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a datascientist or software developer
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m also
        learning how to play the guitar.
      </p>

    </motion.section>
  )
}
