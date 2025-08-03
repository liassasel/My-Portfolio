import { motion } from 'framer-motion'

type SkillsProps = {
    t: {
    title: string
    items: string[]
    description: string
    }
}

export default function Skills({ t }: SkillsProps) {
    return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-16"
    >
        <h2 className="text-3xl font-bold mb-8 text-center">{t.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {t.items.map((skill) => (
            <div key={skill} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
            {skill}
            </div>
        ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400">
        {t.description}
        </p>
    </motion.section>
)
}