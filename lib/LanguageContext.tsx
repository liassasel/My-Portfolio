'use client';

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Language, Translations } from '@/app/types';
import { translations } from './translations';

type LanguageContextType = {
    language: Language;
    setLanguage: Dispatch<SetStateAction<Language>>;
    t: Translations[Language];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
}
