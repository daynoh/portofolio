'use client'
import React, { createContext, useContext, useEffect } from 'react'


type Theme = "light" | "dark"
type ThemeContextType = {
  theme:Theme
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType|null>(null)

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export default function ThemeContextProvider({
  children
}: ThemeContextProviderProps) {
  const [theme, setTheme] = React.useState<Theme>('dark')
    const toggleTheme = () => {
        if (theme === 'light'){
            setTheme('dark')
            window.localStorage.setItem('Theme', 'dark')
            document.documentElement.classList.add("dark")
        }else{
            setTheme("light")
            window.localStorage.setItem('Theme', 'light')
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem('theme') as Theme

        if (localTheme){
            setTheme(localTheme)
            if(localTheme === "dark"){
                document.documentElement.classList.add('dark')
            }
        }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    },[])
  return (
    <ThemeContext.Provider value = {{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  const context = useContext(ThemeContext)
  if(context === null){
    throw new Error("useTheme must be used within a ThemeContextProvider")

  }

  return context
}