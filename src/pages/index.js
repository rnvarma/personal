import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"
import _ from "underscore"
import moment from "moment"
import { Helmet } from "react-helmet"
import VizSensor from "react-visibility-sensor"

import Post from "../components/post"
import PageLayout from "../components/pageLayout"
import { NAV_OPTIONS } from "../constants/posts"
import favicon from "../favicon.png"
import { LEFT_NAV_WIDTH } from "../components/leftNav"
import { MOBILE_NAV_HEIGHT } from "../components/mobileNav"

import "../index.css"

const useStyles = makeStyles(theme => ({
  body: {
    height: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    width: `calc(100% - ${LEFT_NAV_WIDTH}px)`,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: `calc(100vh - ${MOBILE_NAV_HEIGHT}px)`,
    },
  },
}))

export default function Home({ data }) {
  const classes = useStyles()
  const [selectedPostType, setSelectedPostType] = useState(undefined)
  const [visiblePosts, setVisiblePosts] = useState(new Set())

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

  const onPostVisible = postIndex => {
    const newVisiblePosts = new Set(visiblePosts)
    newVisiblePosts.add(postIndex)
    setVisiblePosts(newVisiblePosts)
  }

  const onPostUnvisible = postIndex => {
    const newVisiblePosts = new Set(visiblePosts)
    newVisiblePosts.delete(postIndex)
    setVisiblePosts(newVisiblePosts)
  }

  const currentHeaderPostIdx =
    visiblePosts.length === 0 ? 0 : Math.min(...visiblePosts)

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
        currentTitlePost={sortedPosts[currentHeaderPostIdx]?.node || undefined}
      >
        <div className={classes.body}>
          {sortedPosts.map((post, idx) => (
            <VizSensor
              partialVisibility={true}
              onChange={isVisible => {
                isVisible ? onPostVisible(idx) : onPostUnvisible(idx)
              }}
            >
              <Post post={post.node} key={_.uniqueId("post-")} />
            </VizSensor>
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
