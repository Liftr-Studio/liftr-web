import * as React from "react"
import {
  content,
  heading,
  item,
} from "./CompanyValuesCulture.module.css"
import { PageContainer } from "../PageContainer";
import { SectionWrapper } from "../SectionWrapper";
import { Heading } from "../Heading/Heading";

const CompanyValuesCulture = () => (
  <PageContainer>
    <SectionWrapper extraClass={content} hasAlternativeFont>
      <Heading importance={2} theme={3} isCenter extraClass={heading}>Company values & culture</Heading>
      <div className={content}>
        <div className={item}>
          <Heading importance={3} theme={3}>Growth mindset</Heading>
          <p>We never stop pursuing getting better.</p>
        </div>
        <div className={item}>
          <Heading importance={3} theme={3}>Community first</Heading>
          <p>Products are built by teams not individuals</p>
        </div>
        <div className={item}>
          <Heading importance={3} theme={3}>Authentic ownership</Heading>
          <p>We design it, we code it, we test it, we fix it.</p>
        </div>
        <div className={item}>
          <Heading importance={3} theme={3}>Love your craft</Heading>
          <p>We do our best when we love what we do</p>
        </div>
      </div>
    </SectionWrapper>
  </PageContainer>
)

export { CompanyValuesCulture }
