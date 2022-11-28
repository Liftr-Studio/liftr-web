import * as React from "react"
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Link } from "gatsby"
import {
  cta,
  ctaPrimary,
  ctaSecondary,
  contentWrapper,
  iconWrapper
} from "./CTA.module.css"

const CTA = ({ children, importance, to, hasArrowIcon }) => {
  const classes = classNames(
    cta,
    {
      [ ctaPrimary ]: importance === 'primary',
      [ ctaSecondary ]: importance === 'secondary',
    }
  )
  return (
    <Link className={classes} to={to}>
      <span className={contentWrapper}>
        <span>
          {children}
        </span>

        {
          hasArrowIcon && (
            <span className={iconWrapper}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.08301 11L20.9163 11" stroke="#FE5252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 1.08301L20.9167 10.9997L11 20.9163" stroke="#FE5252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )
        }
      </span>
    </Link>
  )
}

CTA.propTypes = {
  children: PropTypes.string.isRequired,
  hasArrowIcon: PropTypes.bool,
  importance: PropTypes.oneOf(["primary", "secondary"]),
  to: PropTypes.string.isRequired,
}

CTA.defaultProps = {
  hasArrowIcon: false,
  importance: "primary",
}

export { CTA }
