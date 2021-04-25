import React from "react"
import Layout from "../components/layout"
import Header from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function DefaultPage({ data, location }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
    <Header title={frontmatter.title} description={frontmatter.description} />
    <Layout location={location}>
      {frontmatter.title_image &&
            <div className="mb-6">
              <Img
                fluid={frontmatter.title_image.childImageSharp.fluid}
                alt={frontmatter.title_image_alt}
              />
            </div>
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
          <div className="flex-none flex md:flex-col flex-row flex-wrap md:flex-no-wrap md:w-1/4 md:ml-6 mt-3 md:mt-0 place-items-auto md:place-items-end w-full">
            {frontmatter.sidebar_images.map((ele, index) => (
              <div className="flex-initial pb-4 mx-auto w-full" key={index}>
                <Img
                  fluid={ele.img.childImageSharp.fluid}
                  alt={ele.alt}
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
        title_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title_image_alt
        sidebar_images{
          img {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
        }
        description
      }
    }
  }
`