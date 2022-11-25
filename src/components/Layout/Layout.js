import * as React from "react"
import "normalize.css"
import PropTypes from 'prop-types';
import "./Layout.module.css"

const Layout = ({ children }) => (
  <div className="liftr">
    {children}
  </div>
)


Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ])
}

export { Layout }
