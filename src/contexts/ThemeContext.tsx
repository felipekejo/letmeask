import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
  children: ReactNode
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const storageTheme = localStorage.getItem('theme')

    return (storageTheme && 'light') as Theme
  })


  function toggleTheme() {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      setCurrentTheme('dark')
    }
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
