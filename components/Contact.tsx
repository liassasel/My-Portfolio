import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

type ContactProps = {
    t: {
    title: string
    }
}

export default function Contact({ t }: ContactProps) {
    return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="py-16"
    >
        <h2 className="text-3xl font-bold mb-8 text-center">{t.title}</h2>
        <div className="flex justify-center space-x-4">
        <Link href="https://www.linkedin.com/in/angel-useche-a0614a22a/" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
            </Button>
        </Link>
        <Link href="https://github.com/liassasel" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
            </Button>
        </Link>
        <Link href="https://wa.me/584122041596" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline">
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">WhatsApp</span>
            </Button>
        </Link>
        <Link href="mailto:auseche80@gmail.com">
            <Button size="icon" variant="outline">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
            </Button>
        </Link>
        </div>
    </motion.section>
)
}