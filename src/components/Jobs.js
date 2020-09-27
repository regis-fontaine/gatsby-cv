import React, { useState } from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  const [value, setValue] = useState(0)

  {/*const { company, position, date, desc, techno, localisation } = jobs[value]*/}
  const { company, position, date, desc, localisation } = jobs[value]


  return (
    <section className="section jobs">
      <Title title="expériences" />
      <div className="jobs-center">
        {/* btn container */}

        <div className="btn-container">
        {/* 
          Map la donnée de jobs 
          Puis return un button
          QUi au clique set la valeur du job concerné
          Et devient un button avtif 
        */}
          {jobs.map((job, idx) => {
            return (

              <button
                key={job.strapiId}
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
            <h3>{position}</h3>
            <h4>{company}</h4>
            <p className="job-date">{date}, {localisation}</p>
           {/* <div className="job-stack">
            {
              techno.map(stack => {
                return <p>{stack.name}</p>
              })
            }
            </div>*/}

            {
              desc.map((description) =>{
                return <div key={description.id} className="job-desc">
                <FaAngleDoubleRight className="job-incon"></FaAngleDoubleRight>
                <p>{description.name}</p>
                </div>
              })
            }
          </article>

      </div>
      <Link to="/about" className="btn center-btn" >
        En savoir plus
      </Link>
    </section>
  )
}

export default Jobs

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
      nodes {
        company
        date
        localisation
        position
        
        desc {
          name
          id
        }
      }
    }
  }
`
