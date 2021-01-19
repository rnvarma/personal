import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import moment from "moment"

import PostLayout from "./layout"

import { NAV_OPTIONS } from "../../constants/posts"

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: -4, // to offset thespace made by the icon to align the title with the date
  },
  content: {
    whiteSpace: "pre-wrap",
    fontSize: 18,
    lineHeight: "24px",
  },
})

type Props = {
  date: string
  title: string
  content: string
}

export default function Thoughts({ date, title, content }) {
  const classes = useStyles()

  return (
    <PostLayout leftContent={<>{moment(date).format("MMM Do, YYYY")}</>}>
      <div className={classes.root}>
        <div
          className={classes.title}
        >{`${NAV_OPTIONS.thoughts.icon} ${title}`}</div>
        <div className={classes.content}>{content}</div>
      </div>
    </PostLayout>
  )
}
