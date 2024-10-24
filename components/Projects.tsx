import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Project, projectsData } from '../lib/translations'

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
            <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={projectsData[index].imageUrl}
            projectUrl={projectsData[index].projectUrl}
            viewProjectText={t.viewProject}
            />
        ))}
        </div>
    </motion.section>
    )
}