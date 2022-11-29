import * as React from "react"
import { Heading } from "../components/Heading"
import { HomepageHero } from "../components/HomepageHero/HomepageHero"
import { Layout } from "../components/Layout"
import { PageContainer } from "../components/PageContainer"
import { SectionWrapper } from "../components/SectionWrapper"

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
   </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Liftr Studio</title>
