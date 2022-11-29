import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {
  heading,
  isCentered,
  theme1,
  theme2,
  theme3,
} from "./Heading.module.css"

const Heading = ({ children, importance, isCenter, theme }) => {
  const classes = classNames(
    heading,
    {
      [theme1]: theme === 1,
      [theme2]: theme === 2,
      [theme3]: theme === 3,
      [isCentered]: isCenter === true,
    }
  )
  return React.createElement(`h${importance}`, { className: classes, children })
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  importance: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  isCenter: PropTypes.bool,
  theme: PropTypes.oneOf([1, 2, 3]).isRequired,
}

Heading.defaultProps = {
  importance: 1,
  isCenter: false,
}

export { Heading }
