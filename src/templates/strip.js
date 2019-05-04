import React from "react"
import { graphql, Link } from "gatsby"
import Strip from "../components/strip";
import SEO from "../components/seo";

export default function Template({
    data,
    pageContext
}) {
    const { title, date, path } = data.page;
    const { previous, next, first, last } = pageContext;
    const stripProps = { title, date, path, previous, next, first, last };
    return (
        <React.Fragment>
            <SEO title="TODO" keywords={[`gatsby`, `application`, `react`]} />
            <Strip {...stripProps}></Strip>
        </React.Fragment>
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