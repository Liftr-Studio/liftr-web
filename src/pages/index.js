import classNames from "classnames"
import { Link } from "gatsby"
import * as React from "react"
import { CTA } from "../components/CTA"
import { Card } from "../components/Card"
import { Heading } from "../components/Heading"
import { HomepageHero } from "../components/HomepageHero"
import { Layout } from "../components/Layout"
import { Media } from "../components/Media/Media"
import { PageContainer } from "../components/PageContainer"
import { SectionWrapper } from "../components/SectionWrapper"
import tailoredProducts from "../images/media/tailored-products.svg"
import {
  utilityCustomUL,
  utilityCustomContrastUL,
} from "../components/Layout/Layout.module.css"

import {
  cardsWrapper,
  cardWrapper,
  card1,
  headingCard1,
  headingLabelCard1,
  card2,
  headingLabelCard2,
} from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout headerDarkTheme headerIsOverlapping>
      <HomepageHero />

      <PageContainer isNarrow>
        <SectionWrapper isCenter hasAlternativeFont>
          <Heading theme={2} importance={2}>Why Liftr</Heading>
          <p>Liftr was launched to rework the product development agency model and make it relevant for the entrepreneurs and businesses of tomorrow in a post pandemic world.</p>
        </SectionWrapper>
      </PageContainer>

      <PageContainer padding={"onlyLargeScreens"}>
        <SectionWrapper>
          <Heading importance={2} theme={3} isCenter>Our plans</Heading>
          <div className={cardsWrapper}>
            <div className={cardWrapper}>
              <Card extraClass={card1}>
                <Heading importance={3} theme={4} extraClass={headingLabelCard1}>Fuel Plan</Heading>
                <Heading importance={4} theme={5} extraClass={headingCard1}>Product development monthly subscription</Heading>
                <ul className={classNames(utilityCustomUL, utilityCustomContrastUL)}>
                  <li>You’ll be the product manager, we’ll bring the tech, design and go to market execution</li>
                  <li>You pay for what you actually need, every team we build is custom</li>
                  <li>We help you in-house our expertise at a pace that suits you</li>
                </ul>

                <Link to="/">Know more</Link>
              </Card>
            </div>
            <div className={cardWrapper}>
              <Card extraClass={card2}>
                <Heading importance={3} theme={4} extraClass={headingLabelCard2}>Ion Plan</Heading>
                <Heading importance={4} theme={5}>Product development for equity (coming soon)</Heading>
                <ul className={utilityCustomUL}>
                  <li>We pay for the team that will build your product for a modest equity stake in your business</li>
                  <li>You spend your hard earned investment on building your business</li>
                  <li>At a predefined later funding event, we sell our equity back to you and help you in-house product execution</li>
                </ul>
              </Card>
            </div>
          </div>
        </SectionWrapper>
      </PageContainer>

      <PageContainer isNarrow>
        <SectionWrapper isCenter>
          <CTA to="/" hasArrowIcon>Ship products faster</CTA>
        </SectionWrapper>
      </PageContainer>

      <PageContainer>
        <SectionWrapper>
          <Media image={tailoredProducts}>
            <Heading importance={2} theme={3}>Tailored product</Heading>
            <p>We fully embed our product engineering teams in your business so they can think, breathe and dream alongside your own team. We will grow a team that becomes an expert at what you do, and help you in-house its skills over time.</p>
          </Media>
          <Media image={tailoredProducts} flip>
            <Heading importance={2} theme={3}>Vertical ownership</Heading>
            <p>We design it together, we code it, we fix it, we ship it, we grow it. It’s always going to be your product, but also our baby.</p>
          </Media>
          <Media image={tailoredProducts}>
            <Heading importance={2} theme={3}>Serious know-how</Heading>
            <p>We look for people with serious mastery that can work collaboratively directly with founders and ship great product at pace.</p>
          </Media>
          <Media image={tailoredProducts} flip>
            <Heading importance={2} theme={3}>Powerful networks</Heading>
            <p>We have a range of investors, entrepreneurs and executives that we stay in close contact with. We can make the right introductions as they are needed.</p>
          </Media>
          <Media image={tailoredProducts}>
            <Heading importance={2} theme={3}>Experienced founders</Heading>
            <p>We have spent over 15 years working with, contributing to and helping scale high growth companies. We know what breakneck growth looks like because we lived through it ourselves.</p>

            <Link to="/">Read about the people behind Liftr</Link>
          </Media>
        </SectionWrapper>
      </PageContainer>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Liftr Studio</title>
