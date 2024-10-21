import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import Link from 'next/link'

type HeroProps = {
    t: {
    title: string
    subtitle: string
    }
}

export default function Hero({ t }: HeroProps) {
    return (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 text-center"
    >
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight lg:text-7xl">
        {t.title}
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
        {t.subtitle}
        </p>
        <Link href="https://wa.me/584122041596" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
        Contact Me
        </Button>
        </Link>
    </motion.section>
)
}