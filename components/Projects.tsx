import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

interface Project {
    title: string
    description: string
    imageUrl: string
    projectUrl: string
}

type ProjectsProps = {
    t: {
    title: string
    viewProject: string
    }
    projects: Project[]
}

export default function Projects({ t, projects }: ProjectsProps) {
    return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-16"
    >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t.title}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
            <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            viewProjectText={t.viewProject}
            />
        ))}
        </div>
    </motion.section>
    )
}