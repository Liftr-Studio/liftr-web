import * as React from "react"
import { CTA } from "../components/CTA"
import { Heading } from "../components/Heading/Heading"
import { HomepageHero } from "../components/HomepageHero/HomepageHero"
import { Layout } from "../components/Layout"
import { PageContainer } from "../components/PageContainer"
import { SectionWrapper } from "../components/SectionWrapper"

const IndexPage = () => {
  return (
   <Layout headerDarkTheme headerIsOverlapping>
    <HomepageHero />
    <PageContainer>
      <SectionWrapper isCenter>
        <Heading theme={2} importance={2}>Start your journey with Liftr</Heading>
        <CTA to="/" hasArrowIcon>Ship products faster</CTA>
      </SectionWrapper>
    </PageContainer>
   </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Liftr Studio</title>
