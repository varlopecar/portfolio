import ElasticLine from "@/fancy/components/physics/elastic-line"
import UnderlineCenterText from "@/fancy/components/text/underline-center"
import Image from "next/image"

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    imageUrl?: string
    liveUrl?: string
    githubUrl?: string
}

export function ProjectCard({
    title,
    description,
    technologies,
    imageUrl,
    liveUrl,
    githubUrl,
}: ProjectCardProps) {
    return (
        <div className="bg-card p-6 rounded-lg group hover:shadow-lg transition-all duration-300">
            {imageUrl && (
                <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            <h3 className="text-xl font-bold text-card-foreground mb-2">
                <UnderlineCenterText label={title} />
            </h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                        >
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
            <ElasticLine className="w-full h-[2px] mt-4" />
        </div>
    )
} 