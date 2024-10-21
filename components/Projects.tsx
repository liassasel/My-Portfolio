import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'

type ProjectsProps = {
    t: {
    title: string
    items: Array<{ title: string; description: string }>
    viewProject: string
    }
}

export default function Projects({ t }: ProjectsProps) {
    return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-16"
    >
        <h2 className="text-3xl font-bold mb-8 text-center">{t.title}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((project, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                src={`/forchange?height=200&width=400&text=${project.title}`}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-lg"
                />
            </CardContent>
            <CardFooter>
                <Button variant="outline">{t.viewProject}</Button>
            </CardFooter>
            </Card>
        ))}
        </div>
    </motion.section>
)
}