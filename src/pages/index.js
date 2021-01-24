import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"
import _ from "underscore"
import moment from "moment"
import { Helmet } from "react-helmet"

import Post from "../components/post"
import PageLayout from "../components/pageLayout"
import { NAV_OPTIONS } from "../constants/posts"
import favicon from "../favicon.png"

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
    post.node.type === NAV_OPTIONS.travel.id
      ? moment(post.node.travels[0].end_date)
      : moment(post.node.date)
  ).reverse()

  const postCounts = {}
  _.map(
    _.groupBy(posts, post => post.node.type),
    (posts, type) => (postCounts[type] = posts.length)
  )

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rohan Varma</title>
        <link rel="icon" href={favicon} />
      </Helmet>

      <PageLayout
        selectedPostType={selectedPostType}
        onNavOptionClicked={postType => setSelectedPostType(postType)}
        postCounts={postCounts}
      >
        <div className={classes.root}>
          {sortedPosts.map(post => (
            <Post post={post.node} />
          ))}
        </div>
      </PageLayout>
    </>
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
          travels {
            location
            end_date
            with
          }
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
