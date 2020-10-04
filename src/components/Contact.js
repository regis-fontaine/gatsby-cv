import React from "react"

const Contact = () => {
  return (
    
      <section className="contact-page" id="contact">
        <article className="contact-form">
          <h3>Contact</h3>
          <form action="https://formspree.io/f/xbjplbdl" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="nom"
                placeholder="nom"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Votre message"
                className="form-control"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                Envoyer
              </button>
            </div>
          </form>
        </article>
      </section>
   
  )
}

export default Contact
