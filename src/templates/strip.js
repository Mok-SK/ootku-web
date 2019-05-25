import React from "react"
import { graphql, Link } from "gatsby"
import Strip from "../components/strip";
import SEO from "../components/seo";
import Layout from "../components/layout";

export default function Template({
    data,
    pageContext
}) {
    const { title, date, path } = data.page;
    const { previous, next, first, last } = pageContext;
    const stripProps = { title, date, path, previous, next, first, last };
    return (
        <Layout>
            <SEO title={title} />
            <Strip {...stripProps}></Strip>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    page:stripsYaml(id: {eq: $id}) {
        title
        date
        path 
      }
  }
`;