import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import { NAV_OPTIONS } from "../constants/posts"

const ORDERED_OPTIONS = [
  NAV_OPTIONS.thoughts,
  NAV_OPTIONS.photos,
  NAV_OPTIONS.travel,
  NAV_OPTIONS.life_event,
  NAV_OPTIONS.books,
]

export const LEFT_NAV_WIDTH = 300

const useStyles = makeStyles({
  root: {
    width: LEFT_NAV_WIDTH,
    height: "100vh",
  },
  websiteHeader: {
    paddingLeft: 64,
    paddingRight: 16,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 100,
  },
  navOption: {
    marginLeft: 56,
    paddingRight: 16,
    fontSize: 18,
    fontWeight: 500,
    padding: 8,
    position: "relative",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F2F2F2",
      borderRadius: 6,
    },
  },
  selectedOption: {
    position: "absolute",
    height: "calc(100% - 16px)",
    right: 8,
    top: 8,
    width: 4,
    borderRadius: 4,
    backgroundColor: "#0069ED",
  },
})

type Props = {
  selectedPostType?: string
  onNavOptionClicked: (postType: string) => void
}

export default function LeftNav({ selectedPostType, onNavOptionClicked }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.websiteHeader}>Rohan Varma</div>
      {ORDERED_OPTIONS.map(nav_option => (
        <div
          className={classes.navOption}
          key={`nav-option-${nav_option.id}`}
          onClick={() =>
            onNavOptionClicked(
              selectedPostType === nav_option.id ? undefined : nav_option.id
            )
          }
        >
          {`${nav_option.icon}   ${nav_option.name}`}
          {selectedPostType === nav_option.id && (
            <div className={classes.selectedOption} />
          )}
        </div>
      ))}
    </div>
  )
}
