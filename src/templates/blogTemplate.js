import React from "react"
import { graphql } from "gatsby"
import './styles.css'
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
      const { markdownRemark } = data // data.markdownRemark holds our post data
      const { frontmatter, html } = markdownRemark
      return (
        <div> {frontmatter.title}
          <div 
              className="blog-post-2content"
              dangerouslySetInnerHTML={{ __html: html }}
            >
          </div>
        </div>
      ) 
    }


