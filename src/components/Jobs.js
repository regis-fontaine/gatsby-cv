import React, { useState } from "react"
import Title from "./Title"
import experiences from "../constants/experiences"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  

  const [value, setValue] = useState(0)

  {/*const { company, position, date, desc, techno, localisation } = jobs[value]*/}
  const { title, company, date, lieu, desc } = experiences[value]

  return (
    <section className="section" id="experiences">
      <Title title="expériences" />
      <div className="jobs-center">
        {/* btn container */}

        <div className="btn-container">
        {/* 
          Map la donnée de experiences 
          Puis return un button
          QUi au clique set la valeur du job concerné
          Et devient un button avtif 
        */}
          {experiences.map((job, idx) => {
            return (

              <button
                key={job.id}
                onClick={() => setValue(idx)}
                className={`job-btn ${idx === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>

        {/* job infor */}

          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{date}, {lieu}</p>
           {/* <div className="job-stack">
            {
              techno.map(stack => {
                return <p>{stack.name}</p>
              })
            }
            </div>*/}

            {
              desc.map((description, index) =>{
                return <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-incon"></FaAngleDoubleRight>
                <p>{description}</p>
                </div>
              })
            }
          </article>

      </div>
      {/* <Link to="/about" className="btn center-btn" >
        En savoir plus
      </Link> */}
    </section>
  )
}

export default Jobs

