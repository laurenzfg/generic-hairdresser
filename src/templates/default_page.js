import React from "react"
import Layout from "../components/layout"
import Header from "../components/SEO.js"
import { graphql } from "gatsby"

export default function DefaultPage({ data, location }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
    <Header title={frontmatter.title} description={frontmatter.description} />
    <Layout location={location}>
      {frontmatter.title_image &&
            <img
              src={frontmatter.title_image}
              alt={frontmatter.title_image_alt}
              class="title-picture md:w-screen mb-6"
            />
          }
      <div class="flex md:flex-row md:flex-no-wrap flex-col flex-wrap">
        <div class="flex-grow">
          
          <h1>{frontmatter.title}</h1>
          <div
            class=""
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {frontmatter.sidebar_images && 
          <div class="flex-none flex md:flex-col flex-row flex-wrap md:flex-no-wrap w-screen md:w-1/4 md:ml-3 mt-3 md:mt-0 place-items-auto md:place-items-end">
            {frontmatter.sidebar_images.map((ele) => (
              <div class="flex-initial pb-4 mx-auto">
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
    </>
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
        description
      }
    }
  }
`