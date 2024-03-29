/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import projects from './projects'
import { ProjectsContainer, ProjectsContent } from './styles'
import { Container, Title } from '../../styles/styles'
import { AllProjects } from './Github'
import { Briefcase } from 'phosphor-react'

interface Projects {
  slug: string
  url: string
  title: string
  type: string
  img: string
  description: string
  tags?: [name: string, icon: string]
}

export function Projects() {
  return (
    <Container id="projects">
      <Title>
        Projects
        <span><Briefcase /> Projects</span>
      </Title>
      <ProjectsContainer>
        {projects.map(project => {
          return (
            <Link href={`${project.url}`} key={project.id}>
              <a target="_blank" rel="noopener noreferrer">
                <ProjectsContent>
                  <img src={project.img} alt={project.title} />
                  <div className="title">
                    <h2>{project.title}</h2>
                    <span>{project.type}</span>
                  </div>
                </ProjectsContent>
              </a>
            </Link>
          )
        })}
      </ProjectsContainer>
      <AllProjects />
    </Container>
  )
}
