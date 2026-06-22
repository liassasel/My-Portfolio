'use client';

import { Briefcase, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';
import { experienceData } from '../lib/translations';

export default function Experience() {
    const { t, language } = useLanguage();
    const items = experienceData[language];

    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.experience.title}</h2>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-800" />

                <div className="space-y-12">
                    {items.map((item, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                                className="relative pl-12 md:pl-0"
                            >
                                <span className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-neutral-950" />

                                <div className={`md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
                                        <div className="flex items-start gap-2 mb-1">
                                            <Briefcase className="h-4 w-4 mt-0.5 shrink-0 text-blue-500" />
                                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                                {item.role}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                                            {item.company}
                                        </p>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500 mb-3">
                                            <span>{item.period}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {item.location}
                                            </span>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {item.bullets.map((b, j) => (
                                                <li
                                                    key={j}
                                                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                                >
                                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-600" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
