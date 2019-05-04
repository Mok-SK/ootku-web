import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Strip from "../components/strip";

const IndexPage = () => {
  const { site, lastStrip, firstStrip } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        lastStrip:allStripsYaml(sort: {fields: date, order:DESC}, limit:2) {
          edges {
            node {
              title
              date
              id
              path
            }
            next {
              path
            }
          }
        }
        firstStrip:allStripsYaml(sort: {fields: date, order:ASC}, limit:1) {
          edges {
            node {
              title
              date
              id
              path
            }
          }
        }
      }
    `
  )
  const stripProps = { ...lastStrip.edges[0].node, previous: lastStrip.edges[0].next, first: firstStrip.edges[0].node }; //we have desc, so next is previous :)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Strip {...stripProps}></Strip>
    </Layout>
  );
}
export default IndexPage
