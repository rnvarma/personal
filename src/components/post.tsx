import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Thoughts from "./posts/thoughts"
import Books from "./posts/books"
import Photos from "./posts/photos"

import { NAV_OPTIONS } from "../constants/posts"

const useStyles = makeStyles({
  root: {},
  date: {},
})

type Props = {
  post: any
}

export default function Post({ post }) {
  const classes = useStyles()

  if (NAV_OPTIONS.thoughts.id === post.type) {
    return (
      <Thoughts title={post.title} date={post.date} content={post.content} />
    )
  } else if (NAV_OPTIONS.books.id === post.type) {
    return (
      <Books
        title={post.title}
        date={post.date}
        author={post.author}
        review={post.review}
      />
    )
  } else if (NAV_OPTIONS.photos.id === post.type) {
    return <Photos date={post.date} img={post.image.childImageSharp.fluid} />
  }

  return <div className={classes.root}></div>
}
