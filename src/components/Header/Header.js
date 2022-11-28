import { Link } from "gatsby"
import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { PageContainer } from "../PageContainer"
import liftrLogoWhite from "../../images/liftr-logo-white.svg"
import liftrLogoDark from "../../images/liftr-logo-dark.svg"
import {
  isOverlapping,
  logo,
  nav,
  navItem,
  themeDark,
  wrapper,
} from "./Header.module.css"

const Header = ({ overlap, theme }) => {
  const classes = classNames(
    {
      [isOverlapping]: overlap,
      [themeDark]: theme === "dark",
    }
  )
  return (
    <header className={classes}>
      <PageContainer extraClass={wrapper}>
        <Link to="/" className={logo}>
          <img src={theme === "dark" ? liftrLogoWhite : liftrLogoDark} alt="liftr" />
        </Link>
        <nav className={nav}>
          <Link to="/" className={navItem}>About us</Link>
          <Link to="/" className={navItem}>Careers</Link>
          <Link to="/" className={navItem}>Get in touch</Link>
        </nav>
      </PageContainer>
    </header>
  )
}

Header.propTypes = {
  overlap: PropTypes.bool,
  theme: PropTypes.oneOf([null, "dark"]),
}

Header.defaultProps = {
  overlap: false,
  theme: null,
}

export { Header }
