import { motion } from 'framer-motion'
import Image from 'next/image'
import Yo from '../src/assets/images/yop.jpg'

type AboutProps = {
    t: {
    title: string
    description: string
    }
}

export default function About({ t }: AboutProps) {
    return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16"
    >
        <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">{t.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">
            {t.description}
            </p>
        </div>
        <div className="flex justify-center">
            <Image
            src={Yo}
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full"
            />
        </div>
        </div>
    </motion.section>
)
}