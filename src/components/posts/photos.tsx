import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import moment from "moment"
import Img from "gatsby-image"

import PostLayout from "./layout"

const useStyles = makeStyles({
  root: {},
  img: {
    borderRadius: 8,
    width: "100%",
    maxWidth: 800,
  },
})

type Props = {
  date: string
  img: string
}

export default function Photos({ date, img }) {
  const classes = useStyles()

  return (
    <PostLayout leftContent={<>{moment(date).format("MMM Do, YYYY")}</>}>
      <div className={classes.root}>
        <Img className={classes.img} fluid={img} alt="" />
      </div>
    </PostLayout>
  )
}
