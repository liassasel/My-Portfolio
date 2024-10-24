'use client'

import { useState } from 'react'
import { StaticImageData } from 'next/image'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import { translations } from '../../lib/translations'

// Asegúrate de que estas importaciones sean correctas
import flutterLoginImage from '@/assets/images/flutter_login.png'
import personalBlogImage from '@/assets/images/yop.jpg'
import analyticsDashboardImage from '@/assets/images/yop.jpg'

interface Project {
  title: string
  description: string
  imageUrl: StaticImageData
  projectUrl: string
}

const projectsData: Project[] = [
  {
    title: "Flutter login",
    description: "Login realizado con flutter con resposive para desktop y mobile",
    imageUrl: flutterLoginImage,
    projectUrl: "https://login-in-flutter-6ykidebym-dsasadsas-projects.vercel.app/"
  },
  {
    title: "Personal Blog",
    description: "A blog built with Next.js and MDX for content management",
    imageUrl: personalBlogImage,
    projectUrl: "https://github.com/yourusername/personal-blog"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization panel using D3.js and Express",
    imageUrl: analyticsDashboardImage,
    projectUrl: "https://github.com/yourusername/analytics-dashboard"
  }
]

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
        <Projects t={t.projects} projects={projectsData} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </div>
  )
}

