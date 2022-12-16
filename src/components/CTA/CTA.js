import * as React from "react"
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Link } from "gatsby"
import {
  cta,
  ctaPrimary,
  ctaSecondary,
  ctaTertiary,
  ctaSizeLarge,
  contentWrapper,
  iconWrapper,
} from "./CTA.module.css"

const CTA = ({ children, extraClass, importance, tag, to, hasArrowIcon, size, ...props }) => {
  const classes = classNames(
    cta,
    extraClass,
    {
      [ ctaPrimary ]: importance === 'primary',
      [ ctaSecondary ]: importance === 'secondary',
      [ ctaTertiary ]: importance === 'tertiary',
      [ ctaSizeLarge ]: size === 'large',
    }
  )

  const arrowColour = importance === "tertiary" ? "#313746" : "#FE5252"

  const content = (
    <span className={contentWrapper}>
      <span>
        {children}
      </span>

      {
        hasArrowIcon && (
          <span className={iconWrapper}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.08301 11L20.9163 11" stroke={arrowColour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 1.08301L20.9167 10.9997L11 20.9163" stroke={arrowColour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )
      }
    </span>
  )

  return (
    React.createElement((tag === "button" ? "button" : Link), { className: classes, children: content, to, ...props })
  )
}

CTA.propTypes = {
  children: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  hasArrowIcon: PropTypes.bool,
  importance: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["normal", "large"]),
  tag: PropTypes.oneOf(["anchor", "button"]),
  to: PropTypes.string,
}

CTA.defaultProps = {
  extraClass: null,
  hasArrowIcon: false,
  importance: "primary",
  size: "normal",
  tag: "anchor",
  to: null,
}

export { CTA }
