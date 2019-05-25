import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const DisabledButton = styled.div`
    opacity:0.5;
`
const NavButton = ({ title, to, sprite, enabled, external }) =>
    enabled ?
        (external ?
            <a className={`sprite sprite-${sprite}`} href={to} title={title} target="_blank"></a>
            : <Link className={`sprite sprite-${sprite}`} to={to} title={title}></Link>)
        : <DisabledButton disabled className={`sprite sprite-${sprite}`}></DisabledButton>;


export default NavButton;


// import styled from "styled-components"

// const ButtonX = styled.button`
//     background:blue;
// `; 