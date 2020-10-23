import React from "react"
import {graphql, Link, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {menu: {eq: "legal"}, path: {ne: "/"}}}) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`)

	return (
    <div class="flex flex-row text-gray-600 text-xs md:text-sm">
      <div class="flex-grow my-2">
        {/*This couold be a link back home. We also need to read that from config*/}
        <p>(c) Generic Hairdresser</p>
      </div>
      <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          class="width-auto inline-block mr-4 md:mr-6 lg:mr-8 my-2 hover:text-gray-900"
        >
          <p><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></p>
        </div>
      ))}
      </div>
    </div>
	)
}