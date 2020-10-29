import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function DefaultPage({ data, location }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location={location}>
      {frontmatter.title_image &&
        <img
          src={frontmatter.title_image}
          alt={frontmatter.title_image_alt}
          class="title-picture"
        />
      }
      <h1>{frontmatter.title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        title_image
        title_image_alt
      }
    }
  }
`