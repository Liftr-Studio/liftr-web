import * as React from "react"
import { CTA } from "../components/CTA"
import { Heading } from "../components/Heading"
import { Layout } from "../components/Layout"
import { PageContainer } from "../components/PageContainer"
import { SectionWrapper } from "../components/SectionWrapper"
import { CareersHero } from "../components/CareersHero/CareersHero"
import { LaunchWhatMatters } from "../components/LaunchWhatMatters/LaunchWhatMatters"
import { CompanyValuesCulture } from "../components/CompanyValuesCulture"
import { WhatsInItForYou } from "../components/WhatsInItForYou/WhatsInItForYou"
import {
  utilityCustomUL,
} from "../components/Layout/Layout.module.css"

import {
  headingLifeAtLiftr,
} from "./careers.module.css"

const CareersPage = () => {
  return (
    <Layout>
      <CareersHero />
      <LaunchWhatMatters />
      <WhatsInItForYou />
      <CompanyValuesCulture />
      <PageContainer>
        <SectionWrapper hasAlternativeFont isCenter>
          <Heading theme={2} extraClass={headingLifeAtLiftr}>Life @Liftr</Heading>
          <p>We are setting up our first development centre in Romania. We are a remote first company but, occasionally, we meet IRL in the Cluj area to celebrate success, plan ahead and build a sense of community.</p>
        </SectionWrapper>
      </PageContainer>

      <PageContainer isNarrow>
        <SectionWrapper hasAlternativeFont>
          <Heading theme={3}>Benefits</Heading>
          <ul className={utilityCustomUL}>
            <li>We are a remote first company</li>
            <li>Holiday: 23 days per year + 1 extra day for each year of tenure (up to a max of 28)</li>
            <li>Participation in our attractive bonus scheme which rewards contribution and commitment</li>
            <li>Comprehensive private health insurance</li>
            <li>Training and development expenses up to 700 EUR per person per year</li>
            <li>14" Macbook Pro or equivalent and home set up gear</li>
          </ul>
        </SectionWrapper>
      </PageContainer>

      <PageContainer>
        <SectionWrapper hasAlternativeFont isCenter>
          <Heading theme={3}>Open positions</Heading>
          <p>If you can’t find the role you are looking for posted, but think you could be a great fit, reach out to us at <a href="mailto:careers@liftr.studio">careers (at) liftr (dot) studio</a></p>

          <CTA to="https://www.linkedin.com/company/liftr/jobs/" importance="secondary" hasArrowIcon>Check our LinkedIn page</CTA>
        </SectionWrapper>
      </PageContainer>
    </Layout>
  )
}

export default CareersPage

export const Head = () => <title>Liftr Studio | Careers</title>
