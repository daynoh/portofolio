"use client"
import React, { createContext, useContext, useState } from 'react'
import {links} from '@/lib/data'

type sectionName = typeof links[number]["name"]
type ActiveSectionContextType = {
    activeSection: sectionName
    setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType |null>(null)

export default function ActiveSectionContextProvider({children}:{
    children : React.ReactNode
}) {
    const [activeSection, setActiveSection] = useState<sectionName>('Home')
  return <ActiveSectionContext.Provider value={{activeSection,
                                                setActiveSection}}>
                         {children}
        </ActiveSectionContext.Provider>
}


export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext)

    if (context === null){
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }

    return context;
}