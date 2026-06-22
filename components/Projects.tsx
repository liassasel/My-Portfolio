'use client';

import ProjectCard from './ProjectCard'
import { projectsData } from '../lib/translations'
import SectionReveal from './ui/SectionReveal'
import { useLanguage } from '../lib/LanguageContext'

export default function Projects() {
    const { t } = useLanguage()

    return (
        <SectionReveal className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.projects.title}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {t.projects.items.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={projectsData[index].imageUrl}
                        projectUrl={projectsData[index].projectUrl}
                        viewProjectText={t.projects.viewProject}
                    />
                ))}
            </div>
        </SectionReveal>
    )
}
