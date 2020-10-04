import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// Revoir définition
// ...GatsbyImageSharpFluid
// childImageSharp
// gatsby-image

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">

      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Régis Fontaine</h1>
            <h4>Développeur web JS & PHP/Symfony</h4>
            <Link to="/#contact" className="btn">
              Me contacter
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>

    </header>
  )

}

export default Hero

const query = graphql`
  {
    file(relativePath: { eq: "img2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
