'use client';

import SectionReveal from './ui/SectionReveal'
import { useLanguage } from '../lib/LanguageContext'

export default function Skills() {
    const { t } = useLanguage()

    return (
        <SectionReveal className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.skills.title}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {t.skills.categories.map((cat) => (
                    <div
                        key={cat.name}
                        className="bg-gray-100 dark:bg-neutral-900 rounded-xl p-5 border border-gray-200 dark:border-neutral-800"
                    >
                        <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wider">
                            {cat.name}
                        </h3>
                        <div className="space-y-2">
                            {cat.items.map((skill) => (
                                <div
                                    key={skill}
                                    className="text-sm text-gray-700 dark:text-gray-300"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
                {t.skills.description}
            </p>
        </SectionReveal>
    )
}
