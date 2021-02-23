import React from "react"
import Layout from "../components/layout"
import Header from "../components/seo"
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
              className="title-picture md:w-screen mb-6"
            />
          }
      <div className="flex md:flex-row md:flex-nowrap flex-col flex-wrap">
        <div className="flex-grow">
          
          <h1>{frontmatter.longtitle || frontmatter.title}</h1>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {frontmatter.sidebar_images && 
          <div className="flex-none flex md:flex-col flex-row flex-wrap md:flex-no-wrap md:w-1/4 md:ml-6 mt-3 md:mt-0 place-items-auto md:place-items-end">
            {frontmatter.sidebar_images.map((ele) => (
              <div className="flex-initial pb-4 mx-auto">
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
        longtitle
        title_image
        title_image_alt
        sidebar_images
        description
      }
    }
  }
`