import classNames from "classnames"
import * as React from "react"
import { CTA } from "../components/CTA"
import { Heading } from "../components/Heading"
import { Layout } from "../components/Layout"
import { PageContainer } from "../components/PageContainer"
import { SectionWrapper } from "../components/SectionWrapper"
import {
  utilityCustomUL,
} from "../components/Layout/Layout.module.css"

import {
  headingLifeAtLiftr,
} from "./careers.module.css"

const CareersPage = () => {
  return (
    <Layout>
      <PageContainer>
        <SectionWrapper hasAlternativeFont isCenter>
          <Heading theme={2} extraClass={headingLifeAtLiftr}>Life @Liftr</Heading>
          <p>We are setting up our first development centre in Romania. We are a remote first company but, occasionally, we meet IRL in the Cluj area to celebrate success, plan ahead and build a sense of community.</p>
        </SectionWrapper>
      </PageContainer>
    </Layout>
  )
}

export default CareersPage

export const Head = () => <title>Liftr Studio | Careers</title>
