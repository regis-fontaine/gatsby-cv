import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({}) => {
  return <Layout>
    <section className="projects-page">
     {/* <Projects projects={projects} title="all projects" /> */}
    </section>
  </Layout>
}

export default ProjectsPage

//export const query = graphql`
//  {
//    allStrapiProjects(filter: {}) {
//      nodes {
//        description
//        github
//        id
//        title
//        image {
//          childImageSharp {
//            fluid {
//              ...GatsbyImageSharpFluid
//            }
//          }
//        }
//        stack {
//          id
//          title
//        }
//        url
//      }
//    }
//  }
//`