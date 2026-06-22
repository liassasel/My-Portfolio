'use client';

import { Button } from '../components/ui/button'
import SectionReveal from './ui/SectionReveal'
import { useLanguage } from '../lib/LanguageContext'

export default function Hero() {
    const { t } = useLanguage()

    return (
        <SectionReveal className="py-20 text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-[1.15] lg:text-7xl">
                {t.hero.title}
            </h1>
            <p className="mb-3 text-xl text-gray-600 dark:text-gray-400">
                {t.hero.subtitle}
            </p>
            <p className="mb-10 text-sm text-gray-500 dark:text-gray-500 italic">
                {t.hero.tagline}
            </p>
            <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <a href="https://wa.me/584122041596" target="_blank" rel="noopener noreferrer">
                        Contact Me
                    </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <a href="mailto:auseche2041@gmail.com">
                        Email Me
                    </a>
                </Button>
            </div>
        </SectionReveal>
    )
}
