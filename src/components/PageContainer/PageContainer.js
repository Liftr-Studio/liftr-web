import * as React from "react"
import PropTypes from 'prop-types';
import classNames from "classnames";
import "normalize.css"
import {
  pageContainer,
  hasOnlyLargeScreensPadding,
  hasPadding,
} from "./PageContainer.module.css"

const PageContainer = ({ children, padding }) => {
  const classes = classNames(
    pageContainer,
    {
      [ hasPadding ]: padding === true,
      [ hasOnlyLargeScreensPadding ]: padding === "onlyLargeScreens",
    }
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
  ]).isRequired,
  padding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["onlyLargeScreens"])
  ]),
}

PageContainer.defaultProps = {
  padding: false,
}

export { PageContainer }
