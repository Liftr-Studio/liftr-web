import { Link } from "gatsby"
import * as React from "react"
import { Heading } from "../components/Heading"
import { HomepageHero } from "../components/HomepageHero/HomepageHero"
import { Layout } from "../components/Layout"
import { Media } from "../components/Media/Media"
import { PageContainer } from "../components/PageContainer"
import { SectionWrapper } from "../components/SectionWrapper"
import tailoredProducts from "../images/media/tailored-products.svg"

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
