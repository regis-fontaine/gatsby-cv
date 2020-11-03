import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    author,
    siteDescription,
    image,
    siteUrl,
    siteTitle,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "fr" }} title={`${title} | ${siteTitle} `}>
      <meta name="description" content={description || siteDescription} />
      <meta name="google-site-verification" content="dn9GF02_MSulsDIZQVZ87hO7JF4vWEWRom9v_irFVHk" />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <link rel="canonical" href={siteUrl} />
      {/* Do the same for insta */}
    </Helmet>
  )
}

export default SEO