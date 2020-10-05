import React from "react"
import about from "../constants/about"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

// ...GatsbyImageSharpFluid
const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

const {info, title, stack} = about[0]

  return (
    <>
    <SEO title="À propos" description="À propos de Régis Fontaine" />
      <section  className="about-page" id="apropos" data-sal="slide-down" data-sal-delay="1000"
  data-sal-easing="easeOutElastic">
        <div className="section-center about-center">
          {/* <Image fluid={fluid} className="about-img" /> */}
          <article className="about-text">
            
              <Title title={title} />
              {info.map((line, idx) =>{
              return <p key={idx}>{line}</p>

              })}
              <div className="about-stack">
                {stack.map((item,id)=>{
                 return <span key={id}>{item}</span>
                })}
              </div>
          </article>
        </div>
      </section>
</>
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
