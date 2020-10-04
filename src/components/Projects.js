import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link, useStaticQuery } from "gatsby"

const Projects = ({ title, showLink }) => {
  const data = useStaticQuery(query)

  return (
    <section className="section projects" id="projets">
      <Title title={title} />
      <div className="section-center projects-center">
      {data.allProjectsJson.edges.map((project,idx) => {
        console.log(project.node.stack)
   return <Project
          description={project.node.description}
          title={project.node.title}
          github={project.node.github}
          url={project.node.url}
          id={idx + 1}
          key={idx}
          image={project.node.image.childImageSharp.fluid}
          stack={project.node.stack}
        />
   
  })}
        
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects

export const query = graphql`
  {
    allProjectsJson(sort: {order: DESC, fields: id}) {
      edges {
        node {
          id
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          company
          description
          github
          lieu
          stack
          url
        }
      }
    }
  }
`
