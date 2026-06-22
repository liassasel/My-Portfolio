'use client';

import { useTheme } from 'next-themes'
import { Button } from '../components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

export default function Header() {
    const { theme, setTheme } = useTheme()
    const { language, setLanguage } = useLanguage()

    return (
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="text-sm font-medium rounded-xl"
            >
                {language === 'en' ? 'ES' : 'EN'}
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="text-gray-900 dark:text-gray-100"
            >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
            </Button>
        </nav>
    )
}
