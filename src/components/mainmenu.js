import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from "../images/logo.png"

export default function MainMenu({ data }) {
	return (
    <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
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
    `}
    render={data => (
      <div class="flex flex-col space-y-2 text-gray-900">
      <img
        src={logo}
        alt="Logo"
        class="px-4 py-2 w-full h-16 lg:h-20 object-left object-contain"
      />
      {/* active highlighting */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div class="rounded">
        <div
          class="px-4 py-2 break-words md:hover:text-cd-red transition-colors ease-in-out duration-200"
        >
          <p><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></p>
        </div>
      </div>
      ))}
	  </div>
    )}
    />
	)
}