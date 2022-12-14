import * as React from "react"
import { SEO } from "../components/SEO"
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
  utilityNoWrap,
} from "../components/Layout/Layout.module.css"

import {
  headingLifeAtLiftr,
  openPositionsContent,
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
            <li>Generous holiday allowance</li>
            <li>Participation in our attractive bonus scheme which rewards contribution and commitment</li>
            <li>Comprehensive private health insurance</li>
            <li>Personalised annual training and personal development allocation</li>
            <li>Top market gear so you can be productive</li>
          </ul>
        </SectionWrapper>
      </PageContainer>

      <PageContainer isNarrow>
        <SectionWrapper hasAlternativeFont isCenter>
          <Heading theme={3}>Open positions</Heading>
          <p className={openPositionsContent}>If you can???t find the role you are looking for posted, but think you could be a great fit, reach out to us at <a className={utilityNoWrap} href="mailto:careers@liftr.studio">careers (at) liftr (dot) studio</a>.</p>

          <CTA to="https://www.linkedin.com/company/liftr/jobs/" importance="secondary" hasArrowIcon>See open roles on LinkedIn</CTA>
        </SectionWrapper>
      </PageContainer>
    </Layout>
  )
}

export default CareersPage

export const Head = () => (<SEO title="Liftr Studio | Careers" />)
