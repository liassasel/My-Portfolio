'use client';

import { useLanguage } from '../lib/LanguageContext'

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="bg-gray-100 dark:bg-neutral-900 py-8 mt-8">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} liassasel Developer. {t.footer.copyright}</p>
            </div>
        </footer>
    )
}
