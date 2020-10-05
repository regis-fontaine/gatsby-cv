import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/regis-fontaine",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "www.linkedin.com/in/régis-fontaine",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
