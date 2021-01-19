import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"
import _ from "underscore"
import moment from "moment"

import Post from "../components/post"
import PageLayout from "../components/pageLayout"

import "../index.css"

const useStyles = makeStyles({
  root: {},
})

export default function Home({ data }) {
  const classes = useStyles()
  const [selectedPostType, setSelectedPostType] = useState(undefined)

  const posts = data.allPostsJson.edges
  const filteredPosts = _.filter(posts, post =>
    selectedPostType ? post.node.type === selectedPostType : true
  )
  const sortedPosts = _.sortBy(filteredPosts, post =>
    moment(post.node.date)
  ).reverse()

  return (
    <PageLayout
      selectedPostType={selectedPostType}
      onNavOptionClicked={postType => setSelectedPostType(postType)}
    >
      <div className={classes.root}>
        {sortedPosts.map(post => (
          <Post post={post.node} />
        ))}
      </div>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query {
    allPostsJson {
      edges {
        node {
          type
          date
          title
          author
          content
          review
          image {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
