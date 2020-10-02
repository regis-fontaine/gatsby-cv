import React from "react"
import about from "../constants/about"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

const {info, title, stack} = about[0]

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            
              <Title title={title} />
              <p>{info}</p>
              <div className="about-stack">
                {stack.map((item,id)=>{
                 return <span key={id}>{item}</span>
                })}
              </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
