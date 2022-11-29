import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {
  heading,
  theme1,
  theme2,
} from "./Heading.module.css"

const Heading = ({ children, importance, theme }) => {
  const classes = classNames(
    heading,
    {
      [theme1]: theme === 1,
      [theme2]: theme === 2,
    }
  )
  return React.createElement(`h${importance}`, { className: classes, children })
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  importance: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  theme: PropTypes.oneOf([1, 2]).isRequired,
}

Heading.defaultProps = {
  importance: 1,
}

export { Heading }
