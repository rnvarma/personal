import React from "react"
import cx from "classnames"
import { makeStyles } from "@material-ui/core/styles"

export const LEFT_CONTENT_WIDTH = 200

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
  fullBody: {
    width: `100%`,
  },
})

type Props = {
  leftContent?: JSX.Element
  fullWidth?: boolean
}

export default function PostLayout({ leftContent, children, fullWidth }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {!fullWidth && <div className={classes.leftContent}>{leftContent}</div>}
      <div className={cx(classes.body, { [classes.fullBody]: fullWidth })}>
        {children}
      </div>
    </div>
  )
}
