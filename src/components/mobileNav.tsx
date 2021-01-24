import React from "react"
import cx from "classnames"
import { makeStyles } from "@material-ui/core/styles"

import { NAV_OPTIONS } from "../constants/posts"

export const MOBILE_NAV_HEIGHT = 60

const useStyles = makeStyles(theme => ({
  root: {
    height: MOBILE_NAV_HEIGHT,
    borderBottom: "1px solid #D0D0D0",
    width: "calc(100% - 48px)", // account for padding
    padding: "0 24px",

    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
    whiteSpace: "nowrap",
    marginRight: 20,
  },
  postTitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipses",
  },
}))

type Props = {
  className?: string
}

export default function MobileNav({ className, currentTitlePost }) {
  const classes = useStyles()
  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.title}>Rohan Varma</div>
      <div className={classes.postTitle}>
        {currentTitlePost && postTitle(currentTitlePost)}
      </div>
    </div>
  )
}

const postTitle = post => {
  switch (post.type) {
    case NAV_OPTIONS.photos.id:
      return ""
    case NAV_OPTIONS.travel.id:
      return `${NAV_OPTIONS.travel.icon} ${post.travels[0].location}`
    default:
      return `${NAV_OPTIONS[post.type].icon} ${post.title}`
  }
}
