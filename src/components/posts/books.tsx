import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import moment from "moment"

import PostLayout from "./layout"

import { NAV_OPTIONS } from "../../constants/posts"

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 18,
    marginTop: -4, // to offset thespace made by the icon to align the title with the date
  },
  content: {
    marginTop: 16,
    whiteSpace: "pre-wrap",
    fontSize: 18,
    lineHeight: "24px",
  },
})

type Props = {
  date: string
  title: string
  author: string
  review?: string | null
}

export default function Books({ date, title, author, review }) {
  const classes = useStyles()

  return (
    <PostLayout leftContent={<>{moment(date).format("MMM Do, YYYY")}</>}>
      <div className={classes.root}>
        <div className={classes.title}>
          <b>{`${NAV_OPTIONS.books.icon} ${title}`}</b> {` by ${author}`}
        </div>
        {review && <div className={classes.content}>{review}</div>}
      </div>
    </PostLayout>
  )
}
