import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import LeftNav, { LEFT_NAV_WIDTH } from "./leftNav"

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
  },
  body: {
    height: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    width: `calc(100% - ${LEFT_NAV_WIDTH}px)`,
  },
})

type Props = {
  selectedPostType?: string
  onNavOptionClicked: (postType: string) => void
}

export default function PageLayout({
  children,
  selectedPostType,
  onNavOptionClicked,
  postCounts,
}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LeftNav
        selectedPostType={selectedPostType}
        onNavOptionClicked={onNavOptionClicked}
        postCounts={postCounts}
      />
      <div className={classes.body}>{children}</div>
    </div>
  )
}
