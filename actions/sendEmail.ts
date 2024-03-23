'use server'
import ContactFormEmail from '@/email/contactFormEmail';
import { getErrorMessage } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend'

const resend = new Resend('re_T8gPEvWc_4Mhmvd1PhFfVSK2yWcmuRhiN');



export const sendEmail = async (formData: FormData) =>{
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if (!message || typeof message !== 'string'){
        return{
            error:'invalid message'
        }
    }
    if (!senderEmail || typeof senderEmail !== 'string'){
        return{
            error:'invalid Email'
        }
    }
    try{
        await resend.emails.send({
            from:'Portofolio Contact Form <onboarding@resend.dev>',
            to: 'justdaynoh@gmail.com',
            subject:'Interested In Your Work',
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail,{
                message : message,
                senderEmail: senderEmail})
            })
           
    } catch(error: unknown){
        
    return {
        error : getErrorMessage(error)
    }
    

}

}