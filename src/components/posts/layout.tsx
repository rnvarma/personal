import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const LEFT_CONTENT_WIDTH = 200

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    padding: 32,
    marginRight: 32,
    borderBottom: "1px solid #D0D0D0",
  },
  leftContent: {
    width: LEFT_CONTENT_WIDTH,
    fontSize: 18,
    color: "#555555",
  },
  body: {
    width: `calc(100% - ${LEFT_CONTENT_WIDTH}px)`,
  },
})

type Props = {
  leftContent: JSX.Element
}

export default function PostLayout({ leftContent, children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.leftContent}>{leftContent}</div>
      <div className={classes.body}>{children}</div>
    </div>
  )
}
