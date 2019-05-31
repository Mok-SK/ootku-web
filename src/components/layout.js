import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"
import "./spritesheet.css"

var Footer = styled.footer`
  text-align: center;
`;

var Content = styled.div`
  margin: 0 auto;
  max-width: 822px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  box-sizing: content-box;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            © 2019 by Ivan Ruttkay-Nedecký
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
