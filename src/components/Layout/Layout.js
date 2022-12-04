import * as React from "react"
import { ParallaxProvider } from "react-scroll-parallax";
import "normalize.css"
import PropTypes from 'prop-types';
import { CTA } from "../CTA"
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Heading } from "../Heading"
import { PageContainer } from "../PageContainer"
import { SectionWrapper } from "../SectionWrapper"
import {
  liftr,
  startJourneySection,
} from "./Layout.module.css"

const Layout = ({ children, headerDarkTheme, headerIsOverlapping }) => (
  <ParallaxProvider>
    <div className={liftr}>

        <Header theme={headerDarkTheme ? "dark" : null} overlap={headerIsOverlapping} />

        {children}

        <PageContainer isNarrow extraClass={startJourneySection}>
          <SectionWrapper isCenter>
            <Heading theme={2} importance={2}>Start your journey with Liftr</Heading>
            <CTA to="mailto:contact@liftr.studio?subject=Business enquiry from the website" hasArrowIcon>Ship products faster</CTA>
          </SectionWrapper>
        </PageContainer>

        <Footer />
    </div>
  </ParallaxProvider>
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
