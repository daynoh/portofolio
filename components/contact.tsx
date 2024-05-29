'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import SubmitBtn from './submitBtn'
import toast from 'react-hot-toast'


export default function Contact() {
    const {ref} = useSectionInView("Contact",0.8)
    
    
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
        <p className='text-gray-700 -mt-3 dark:text-white/80'>Please contact me directly at <a href="mailto:musingiladennis@gmail.com" className='underline'>musingiladennis@gmail.com</a></p>

        <form action={async (formData)=>{
            const { data, error } = await sendEmail(formData)
            if (error){
                toast.error(error)
                return
            }
            toast.success('Email sent Succesfully')
        }} className='flex flex-col dark:text-black/80'>
            <input name = 'senderEmail' className ="h-14 rounded-lg border border-black/10
            dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" type="email" placeholder=' Your Email'
            required
            maxLength={500} />
            <textarea name= 'message' className='h-52 my-3 rounded-lg border border-black/10  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder=' Your Message'
            required
            maxLength={500}/>
            <SubmitBtn/>
        </form>
    </motion.section>
  )
}
