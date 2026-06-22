'use client';

import { Button } from '../components/ui/button'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import SectionReveal from './ui/SectionReveal'
import ContactForm from './ContactForm'
import { useLanguage } from '../lib/LanguageContext'

export default function Contact() {
    const { t } = useLanguage()

    return (
        <SectionReveal className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-2">{t.contact.title}</h2>
            <p className="text-gray-500 dark:text-gray-500 mb-12">{t.contact.subtitle}</p>

            <div className="mb-12">
                <ContactForm />
            </div>

            <div className="flex justify-center items-center gap-2 mb-4">
                <span className="h-px w-12 bg-gray-300 dark:bg-neutral-800" />
                <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500">or</span>
                <span className="h-px w-12 bg-gray-300 dark:bg-neutral-800" />
            </div>

            <div className="flex justify-center space-x-4">
                <Button asChild size="icon" variant="outline" aria-label="LinkedIn">
                    <a href="https://www.linkedin.com/in/angel-useche-a0614a22a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6" />
                    </a>
                </Button>
                <Button asChild size="icon" variant="outline" aria-label="GitHub">
                    <a href="https://github.com/liassasel" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                    </a>
                </Button>
                <Button asChild size="icon" variant="outline" aria-label="WhatsApp">
                    <a href="https://wa.me/584122041596" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-6 w-6" />
                    </a>
                </Button>
                <Button asChild size="icon" variant="outline" aria-label="Email">
                    <a href="mailto:auseche2041@gmail.com">
                        <Mail className="h-6 w-6" />
                    </a>
                </Button>
            </div>
        </SectionReveal>
    )
}
