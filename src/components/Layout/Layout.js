import * as React from "react"
import "normalize.css"
import PropTypes from 'prop-types';
import "./Layout.module.css"
import { PageContainer } from "../PageContainer";

const Layout = ({ children }) => (
  <div className="liftr">
    <PageContainer>
      {children}
    </PageContainer>
  </div>
)


Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
}

export { Layout }
