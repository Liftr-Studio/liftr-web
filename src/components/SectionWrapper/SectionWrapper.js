import * as React from "react"
import PropTypes from 'prop-types';
import classNames from "classnames";
import "normalize.css"
import {
  alternativeFont,
  isCentered,
  wrapper,
} from "./SectionWrapper.module.css"

const SectionWrapper = ({ children, extraClass, hasAlternativeFont, isCenter }) => {
  const classes = classNames(
    wrapper,
    {
      [ alternativeFont ]: hasAlternativeFont === true,
      [ isCentered ]: isCenter === true,
    },
    extraClass,
  )

  return (
    <section className={classes}>
      {children}
    </section>
  )
}


SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
  hasAlternativeFont: PropTypes.bool,
  isCenter: PropTypes.bool,
}

SectionWrapper.defaultProps = {
  extraClass: null,
  hasAlternativeFont: false,
  isCenter: false,
}

export { SectionWrapper }
