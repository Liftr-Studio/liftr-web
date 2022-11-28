import * as React from "react"
import PropTypes from 'prop-types';
import classNames from "classnames";
import "normalize.css"
import {
  pageContainer,
  hasOnlyLargeScreensPadding,
  hasPadding,
} from "./PageContainer.module.css"

const PageContainer = ({ children, extraClass, padding }) => {
  const classes = classNames(
    pageContainer,
    {
      [ hasPadding ]: padding === true,
      [ hasOnlyLargeScreensPadding ]: padding === "onlyLargeScreens",
    },
    extraClass
  )

  return (
    <div className={classes} data-testid="wrapper">
      {children}
    </div>
  )
}


PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
  padding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["onlyLargeScreens"])
  ]),
}

PageContainer.defaultProps = {
  extraClass: null,
  padding: true,
}

export { PageContainer }
