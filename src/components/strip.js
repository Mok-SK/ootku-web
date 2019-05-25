import React from "react"
import { graphql, Link } from "gatsby"
import StripImage from "../components/strip-image";
import SEO from "./seo";
import NavButton from "./nav-button";
import styled from "styled-components"

const PagerRoot = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;
const NavButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;
    max-width: 360px;
    flex: 1 1;
`;

const Pager = ({ path, first, last, next, previous }) => (
    <PagerRoot>
        <NavButtons>
            <NavButton to={first && first.path} title="First" sprite="first" enabled={first && first.path !== path}></NavButton>
            <NavButton to={previous && previous.path} title="Previous" sprite="prev" enabled={previous}></NavButton>
            <NavButton to={next && next.path} title="Next" sprite="next" enabled={next}></NavButton>
            <NavButton to={last && last.path} title="Last" sprite="last" enabled={last && last.path !== path}></NavButton>
        </NavButtons>
    </PagerRoot>
);

const Strip = ({
    title, date, path, previous, next, first, last
}) => (
        <div>
            {/* <h1>{title}</h1> */}
            <Pager path={path} first={first} last={last} next={next} previous={previous}></Pager>
            <div>
                {<StripImage src={path}></StripImage>}
            </div>
            <Pager path={path} first={first} last={last} next={next} previous={previous}></Pager>
        </div>
    )

export default Strip
