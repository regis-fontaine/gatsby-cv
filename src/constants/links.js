import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "accueil",
    url: "/",
  },
  {
    id: 2,
    text: "à\u00a0propos",
    url: "/#apropos",
    anchor: "#apropos",
  },
  {
    id: 3,
    text: "éxpériences",
    url: "/#experiences",    
    anchor: "#experiences",
  },
  {
    id: 4,
    text: "projets",
    url: "/#projets",    
    anchor: "#projets",
  },
  {
    id: 5,
    text: "contact",
    url: "/#contact",    
    anchor: "#contact",
  },
]


const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link data-scroll="easeOutQuint" to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
