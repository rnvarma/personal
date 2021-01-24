import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import LeftNav, { LEFT_NAV_WIDTH } from "./leftNav"
import MobileNav, { MOBILE_NAV_HEIGHT } from "./mobileNav"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
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
  leftNav: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileNav: {
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}))

type Props = {
  selectedPostType?: string
  onNavOptionClicked: (postType: string) => void
}

export default function PageLayout({
  children,
  selectedPostType,
  onNavOptionClicked,
  postCounts,
  currentTitlePost,
}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LeftNav
        className={classes.leftNav}
        selectedPostType={selectedPostType}
        onNavOptionClicked={onNavOptionClicked}
        postCounts={postCounts}
      />
      <MobileNav
        className={classes.mobileNav}
        currentTitlePost={currentTitlePost}
      />
      {children}
    </div>
  )
}
