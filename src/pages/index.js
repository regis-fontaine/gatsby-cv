import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import projects from "../constants/projects-list"
import SEO from "../components/SEO"
import Contact from "../components/Contact"
import About from "../components/About"
export default ({}) => {
  return (
    <Layout>
      <SEO title="Accueil" description="Déscription du site" />
      <Hero />
      <About />
      <Jobs />
      <Projects title="projets" />
      <Contact />
    </Layout>
  )
}
