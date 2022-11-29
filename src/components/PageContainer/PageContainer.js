import * as React from "react"
import PropTypes from 'prop-types';
import classNames from "classnames";
import "normalize.css"
import {
  forceNarrowContent,
  hasOnlyLargeScreensPadding,
  hasPadding,
  pageContainer,
} from "./PageContainer.module.css"

const PageContainer = ({ children, extraClass, isNarrow, padding }) => {
  const classes = classNames(
    pageContainer,
    {
      [ forceNarrowContent ]: isNarrow === true,
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
  isNarrow: PropTypes.bool,
  padding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["onlyLargeScreens"])
  ]),
}

PageContainer.defaultProps = {
  extraClass: null,
  isNarrow: false,
  padding: true,
}

export { PageContainer }
