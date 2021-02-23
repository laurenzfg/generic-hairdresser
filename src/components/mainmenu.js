import React from "react"
import {graphql, Link, useStaticQuery } from "gatsby"
import logo from "../images/logo.png"
import MainMenuItem from "./mainmenu_item"

export default function MainMenu(props) {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: {menu: {eq: "main"},
                      path: {ne: "/"}
                    }
      },
      sort: {
        fields: [frontmatter___order,]
        order: ASC
      },
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            order
          }
        }
      }
    }
  }`)

	return (
      <div className="flex flex-col space-y-2 text-gray-900">
      {props.showLogo===true &&
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="px-4 py-2 w-full h-16 lg:h-20 object-left object-contain"
          />
        </Link>
      }
      {props.includeHome===true &&
        <MainMenuItem
        curPath={props.curPath}
        path="/"
        onActiveClickAction={props.onActiveClickAction} 
        title="Home" />
      }
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <MainMenuItem
          curPath={props.curPath}
          path={node.frontmatter.path} 
          onActiveClickAction={props.onActiveClickAction} 
          title={node.frontmatter.title} />
      ))}
	  </div>
	)
}