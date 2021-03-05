import React from "react"
// import SocialLinks from "../constants/socialLinks"
// import { AiFillHeart } from "react-icons/ai"
import { RiGatsbyLine } from "react-icons/ri"

const Footer = () => {
  return <footer className="footer">
    <div>
      {/* <SocialLinks style="footer-links" /> */}
      <h4>copyright&copy;{new Date().getFullYear()}<br></br>
        Made with <RiGatsbyLine />
      </h4>
    </div>
  </footer>
}

export default Footer
