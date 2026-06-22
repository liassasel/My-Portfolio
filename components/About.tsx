'use client';

import Image from 'next/image'
import Yo from '@/assets/images/yop.jpg'
import SectionReveal from './ui/SectionReveal'
import { useLanguage } from '../lib/LanguageContext'

export default function About() {
    const { t } = useLanguage()

    return (
        <SectionReveal className="py-16">
            <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{t.about.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {t.about.description}
                    </p>
                    <ul className="space-y-2">
                        {t.about.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={Yo}
                        alt="Angel Useche — Backend Developer"
                        width={300}
                        height={300}
                        className="rounded-full"
                        priority
                    />
                </div>
            </div>
        </SectionReveal>
    )
}
