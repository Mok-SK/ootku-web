/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const imgPageTemplate = path.resolve(`src/templates/strip.js`)

    const result = await graphql(`
        {
            allStripsYaml(sort: {fields: date}){
                edges{
                    node{
                        id,
                        path
                    }
                    next {
                        path
                    }
                    previous {
                        path
                    }
                }
            }  
        }
    `);
    if (result.errors) {
        throw result.errors;
    }
    const first = result.data.allStripsYaml.edges[0].node;
    const last = result.data.allStripsYaml.edges[result.data.allStripsYaml.edges.length - 1].node;
    result.data.allStripsYaml.edges.forEach(({ node, next, previous }) => createPage({
        path: node.path,
        component: imgPageTemplate,
        context: { id: node.id, next, previous, first, last },
    }));
};