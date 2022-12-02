import * as React from "react"
import PropTypes from 'prop-types';
import classNames from "classnames";
import "normalize.css"
import {
  wrapper,
} from "./Card.module.css"

const Card = ({ children, extraClass }) => {
  const classes = classNames(
    wrapper,
    extraClass,
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}


Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
}

Card.defaultProps = {
  extraClass: null,
}

export { Card }
