import React from "react"
import {graphql, Link, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        author
      }
    }
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
  }
  `)

	return (
    <div class="flex flex-row text-gray-600 text-xs md:text-sm">
      <div class="flex-grow pr-2">
        {/*This couold be a link back home. We also need to read that from config*/}
        <p>(c) {data.site.siteMetadata.author}</p>
      </div>
      <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          class="inline-block ml-2 md:mr-6 lg:mr-8 hover:text-gray-900"
        >
          <p><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></p>
        </div>
      ))}
      </div>
    </div>
	)
}