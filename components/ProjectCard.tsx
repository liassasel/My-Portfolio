'use client';

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'

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
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
            <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                <Link href={projectUrl} passHref legacyBehavior>
                    <Button
                        variant="outline"
                        className="w-full border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-neutral-800"
                    >
                        {viewProjectText}
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}
