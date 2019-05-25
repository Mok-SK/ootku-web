import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavButton from "./nav-button";
import styled from 'styled-components';

const Root = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 0 0;

  .sprite-logo{
    margin-bottom: 28px;
  }
`;

const Header = ({ siteTitle }) => (
  <Root>
    <div className="sprite sprite-logo"></div>
    <NavButton to="https://www.facebook.com/OutOfTheKnownUniverse" title="First" sprite="fb" enabled="true" external="true"></NavButton>
  </Root>
)

export default Header
