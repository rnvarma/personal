import React from "react"
import cx from "classnames"
import { makeStyles } from "@material-ui/core/styles"

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
  },
}))

type Props = {
  className?: string
}

export default function MobileNav({ className }) {
  const classes = useStyles()
  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.title}>Rohan Varma</div>
    </div>
  )
}
