import React from "react"
import { graphql, Link } from "gatsby"
import StripImage from "../components/strip-image";
import SEO from "./seo";

const Pager = ({ path, first, last, next, previous }) => (
    <div>
        {first && first.path !== path && <Link to={first.path}>First</Link>}&nbsp;
        {previous && <Link to={previous.path}>Previous</Link>}&nbsp;
        {next && <Link to={next.path}>Next</Link>}&nbsp;
        {last && last.path !== path && <Link to={last.path}>Last</Link>}&nbsp;
    </div>
);

const Strip = ({
    title, date, path, previous, next, first, last
}) => (
        <div>
            <h1>{title}</h1>
            <Pager path={path} first={first} last={last} next={next} previous={previous}></Pager>
            <div>
                {<StripImage src={path}></StripImage>}
            </div>
            <Pager path={path} first={first} last={last} next={next} previous={previous}></Pager>
            <div>{date}</div>
        </div>
    )

export default Strip
