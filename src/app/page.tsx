import AnimatedGradient from "@/fancy/components/background/animated-gradient-with-svg"
import TypewriterText from "@/fancy/components/text/typewriter"
import ElasticLine from "@/fancy/components/physics/elastic-line"
import Gravity from "@/fancy/components/physics/gravity"
import UnderlineCenterText from "@/fancy/components/text/underline-center"
import UnderlineComesInGoesOut from "@/fancy/components/text/underline-comes-in-goes-out"
import { Navigation } from "@/components/Navigation"
import { ProjectCard } from "@/components/ProjectCard"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with Next.js and TypeScript",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/project1.jpg",
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/username/project1",
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with real-time updates",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/project2.jpg",
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/username/project2",
  },
  {
    title: "Project 3",
    description: "A mobile-first responsive dashboard",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    imageUrl: "/project3.jpg",
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/username/project3",
  },
]

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git"] },
  { name: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] },
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="absolute inset-0 -z-10">
            <AnimatedGradient
              colors={["#4F46E5", "#EC4899", "#8B5CF6"]}
              speed={20}
              blur="medium"
            />
          </div>
          <div className="text-center z-10 space-y-6">
            <TypewriterText
              text="Hi, I&apos;m a Developer"
              className="text-6xl font-bold text-primary mb-4"
            />
            <UnderlineCenterText
              label="Building amazing experiences"
              className="text-2xl text-primary-foreground"
            />
            <div className="flex justify-center gap-4 mt-8">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <UnderlineComesInGoesOut
              label="About Me"
              className="text-4xl font-bold text-primary mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I&apos;m a passionate developer focused on creating beautiful and functional web experiences.
                  With expertise in modern web technologies, I bring ideas to life through clean code and
                  thoughtful design.
                </p>
                <p className="text-muted-foreground">
                  My journey in web development started with a curiosity for creating interactive experiences.
                  Today, I specialize in building scalable applications that solve real-world problems.
                </p>
              </div>
              <div className="relative h-[300px]">
                <Gravity className="w-full h-full">
                  <div className="w-full h-full bg-primary/20 rounded-lg" />
                </Gravity>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <UnderlineComesInGoesOut
              label="My Projects"
              className="text-4xl font-bold text-secondary-foreground mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <UnderlineComesInGoesOut
              label="Skills"
              className="text-4xl font-bold text-primary mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((category, i) => (
                <div key={i} className="space-y-4">
                  <UnderlineCenterText
                    label={category.name}
                    className="text-xl font-bold text-primary-foreground"
                  />
                  <ul className="space-y-2">
                    {category.items.map((skill, j) => (
                      <li key={j} className="text-muted-foreground flex items-center">
                        <ElasticLine className="w-2 h-[2px] mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <UnderlineComesInGoesOut
              label="Get in Touch"
              className="text-4xl font-bold text-accent-foreground mb-8"
            />
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
