import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const {pending} = useFormStatus()
    
  return (
    <div>
      <button className='group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white 
            rounded-full outline-none transition-all gap-2 ocus:scale-[1.15] hover:bg-gray-950 hover:scale-[1.15]
            disabled:scale-100 disabled:bg-opacity-75d dark:text-gray-950/80 dark:bg-white dark:bg-opacity/10'
            disabled={pending} type='submit'>
                {
                    pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>: (
                        <>
                            Submit 
                            <FaPaperPlane
                                className='text-xs opacity-70 transition-all
                                group-hover:transition-all
                                group-hover:translate-x-1
                                group-hover:-translate-y-1' />
                        </>
                       
                    )
                }
        </button>
    </div>
  )
}
