import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const StripImage = ({ src, ...props }) => {
  //handles missing parameters in useStaticQuery - https://github.com/gatsbyjs/gatsby/issues/10482
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "/image/" } } absolutePath:{regex: "/\/strips\//"} } ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 822) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.edges.find(({ node }) => src === node.name)
  ), [ data, src ])

  return (
    <Img
    style= {{maxWidth:822}}
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  )
}

export default StripImage