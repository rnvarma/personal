import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import moment from "moment"

import PostLayout, { LEFT_CONTENT_WIDTH } from "./layout"

import { NAV_OPTIONS } from "../../constants/posts"

const useStyles = makeStyles(theme => ({
  root: {},
  travelEntry: {
    marginBottom: 20,
    display: "flex",
    alignItems: "flex-start",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: 28,
    },
  },
  date: {
    fontSize: 18,
    color: "#555555",
    width: LEFT_CONTENT_WIDTH,

    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      width: "100%",
      marginBottom: 12,
    },
  },
  info: {
    width: `calc(100% - ${LEFT_CONTENT_WIDTH}px)`,
    fontSize: 18,
    marginTop: -4, // to offset thespace made by the icon to align the title with the date

    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      width: "100%",
    },
  },
}))

type Props = {
  startDate: string
  travels: { location: string; end_date: string; with: string }
}

export default function Travel({ startDate, travels }) {
  const classes = useStyles()

  return (
    <PostLayout leftContent fullWidth>
      <div className={classes.root}>
        {travels.map(travel => (
          <div
            className={classes.travelEntry}
            key={`travel-entry-${travel.location}-${travel.end_date}`}
          >
            <div className={classes.date}>
              {moment(travel.end_date).format("MMM Do, YYYY")}
            </div>
            <div className={classes.info}>
              <b>{`${NAV_OPTIONS.travel.icon} ${travel.location}`}</b>{" "}
              {` with ${travel.with}`}
            </div>
          </div>
        ))}
        <div className={classes.travelEntry}>
          <div className={classes.date}>
            {moment(startDate).format("MMM Do, YYYY")}
          </div>
        </div>
      </div>
    </PostLayout>
  )
}
