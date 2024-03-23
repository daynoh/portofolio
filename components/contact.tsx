'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'


export default function Contact() {
    const {ref} = useSectionInView("Contact",0.2)
    
  return (
    <motion.section
        ref={ref}
        id='contact' 
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            delay: 0.7
        }}
        viewport={{
            once : true
        }}
    >
        <SectionHeading>
            Contact Me
        </SectionHeading>
        <p className='text-gray-700 -mt-3'>Please contact me directly at <a href="mailto:example@gmail.com" className='underline'>example@gmail.com</a></p>

        <form action={async (formData)=>{
            await sendEmail(formData)
        }} className='flex flex-col'>
            <input name = 'senderEmail' className ="h-14 rounded-lg border border-black/10" type="email" placeholder=' Your Email'
            required
            maxLength={500} />
            <textarea name= 'message' className='h-52 my-3 rounded-lg border border-black/10' placeholder=' Your Message'
            required
            maxLength={500}/>
            <button className='group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white 
            rounded-full outline-none transition-all gap-2 ocus:scale-[1.15] hover:bg-gray-950 hover:scale-[1.15]' type='submit'>Submit <FaPaperPlane
            className='text-xs opacity-70 transition-all
            group-hover:transition-all
            group-hover:translate-x-1
            group-hover:-translate-y-1' /></button>
        </form>
    </motion.section>
  )
}
