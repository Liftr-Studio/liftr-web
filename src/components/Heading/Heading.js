import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {
  heading,
  isCentered,
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
  theme7,
} from "./Heading.module.css"

const Heading = ({ children, extraClass, importance, isCenter, theme }) => {
  const classes = classNames(
    heading,
    {
      [theme1]: theme === 1,
      [theme2]: theme === 2,
      [theme3]: theme === 3,
      [theme4]: theme === 4,
      [theme5]: theme === 5,
      [theme6]: theme === 6,
      [theme7]: theme === 7,
      [isCentered]: isCenter === true,
    },
    extraClass,
  )
  return React.createElement(`h${importance}`, { className: classes, children })
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  importance: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  isCenter: PropTypes.bool,
  theme: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]).isRequired,
}

Heading.defaultProps = {
  extraClass: null,
  importance: 1,
  isCenter: false,
}

export { Heading }
