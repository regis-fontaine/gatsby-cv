import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
// import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
// import projects from "../constants/projects-list"
import SEO from "../components/SEO"
import Contact from "../components/Contact"
import About from "../components/About"
export default ({}) => {

  return (
    <Layout>
      <SEO title="Accueil" description="Régis Fontaine Dévelopeur Web à la recherche d'une alternance" />
      <Hero />
      <About />
      <Jobs />
      <Projects title="projets" />
      <Contact />
    </Layout>
  )
}
