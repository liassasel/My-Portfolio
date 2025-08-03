import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'

interface ProjectCardProps {
    title: string
    description: string
    imageUrl: StaticImageData
    projectUrl: string
    viewProjectText: string
}

export default function ProjectCard({ title, description, imageUrl, projectUrl, viewProjectText }: ProjectCardProps) {
    return (
    <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-4">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{title}</CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-300">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
            <div className="relative w-full h-48">
            <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="transition-opacity duration-300 hover:opacity-75"
            />
            </div>
        </CardContent>
        <CardFooter className="p-4 bg-gray-50 dark:bg-gray-900">
            <Link href={projectUrl} passHref legacyBehavior>
            <Button 
                variant="outline" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white border-none transition-colors duration-300"
            >
                {viewProjectText}
            </Button>
            </Link>
        </CardFooter>
        </Card>
    </motion.div>
    )
}