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
        lastStrip:allStripsYaml(sort: {fields: date, order:DESC}, limit:1) {
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
        firstStrip:allStripsYaml(sort: {fields: date, order:ASC}, limit:2) {
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
      }
    `
  )
  const stripProps = { ...firstStrip.edges[0].node, next: firstStrip.edges[0].next, last: lastStrip.edges[0].node }; //we have desc, so next is previous :)
  return (
    <Layout>
      <Strip {...stripProps}></Strip>
    </Layout>
  );
}
export default IndexPage
