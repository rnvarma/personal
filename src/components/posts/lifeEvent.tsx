import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import moment from "moment"

import PostLayout from "./layout"

import { NAV_OPTIONS } from "../../constants/posts"

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontSize: 18,
    marginTop: -4, // to offset thespace made by the icon to align the title with the date

    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
}))

type Props = {
  date: string
  title: string
}

export default function LifeEvent({ date, title }) {
  const classes = useStyles()

  return (
    <PostLayout leftContent={<>{moment(date).format("MMM Do, YYYY")}</>}>
      <div className={classes.root}>
        <div className={classes.title}>
          <b>{`${NAV_OPTIONS.life_event.icon} ${title}`}</b>
        </div>
      </div>
    </PostLayout>
  )
}
