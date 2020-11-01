import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function DefaultPage({ data, location }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location={location}>

      <div class="flex md:flex-row md:flex-no-wrap flex-col flex-wrap">
        <div class="flex-grow">
          {frontmatter.title_image &&
            <img
              src={frontmatter.title_image}
              alt={frontmatter.title_image_alt}
              class="title-picture w-scree"
            />
          }
          <h1>{frontmatter.title}</h1>
          <div
            class=""
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {frontmatter.sidebar_images && 
          <div class="ml-3 flex-none flex md:flex-col md:w-3/12 md:flex-no-wrap flex-row flex-wrap">
            {frontmatter.sidebar_images.map((ele) => (
              <div class="flex-initial md:pb-4 md:m-0 m-4 w-48 mx-auto">
                <img
                  src={ele[0]}
                  alt={ele[1]}
                />
              </div>
            ))}
          </div>
        }
        </div>
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
        sidebar_images
      }
    }
  }
`