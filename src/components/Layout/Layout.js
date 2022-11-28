import * as React from "react"
import "normalize.css"
import PropTypes from 'prop-types';
import { Header } from "../Header";
import "./Layout.module.css"

const Layout = ({ children, headerDarkTheme, headerIsOverlapping }) => (
  <div className="liftr">
    <Header theme={headerDarkTheme ? "dark" : null} overlap={headerIsOverlapping} />
    {children}
  </div>
)


Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  headerDarkTheme: PropTypes.bool,
  headerIsOverlapping: PropTypes.bool,
}

Layout.defaultProps = {
  headerDarkTheme: false,
  headerIsOverlapping: false,
}

export { Layout }
