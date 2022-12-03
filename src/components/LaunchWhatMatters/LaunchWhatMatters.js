import * as React from "react"
import {
  content,
  tinyStar,
  wrapper,
} from "./LaunchWhatMatters.module.css"
import { PageContainer } from "../PageContainer";
import { SectionWrapper } from "../SectionWrapper";
import { Heading } from "../Heading/Heading";
import star from "../../images/star-theme-1.svg"

const LaunchWhatMatters = () => (
  <section className={wrapper}>
    <PageContainer>
      <SectionWrapper extraClass={content} hasAlternativeFont>
        <Heading theme={2} importance={2}>Launch something that matters</Heading>
        <img src={star} alt="" className={tinyStar} />
        <p>Product development is a collaborative journey and the quality of the resulting product is directly proportional to the care, skill, teamwork, values and wellbeing of the people building them. At Liftr, we deeply believe that our top priority in perpetuity is to recruit, support, empower and reward great people to build great things.</p>
      </SectionWrapper>
    </PageContainer>
  </section>
)

export { LaunchWhatMatters }
