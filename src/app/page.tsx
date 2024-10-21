"use client";

import { useState } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import { translations } from '../../lib/translations'

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'es'>('en')
  const t = translations[language]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Header language={language} setLanguage={setLanguage} />
      <main className="container mx-auto px-4">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Skills t={t.skills} />
        <Projects t={t.projects} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </div>
  )
}