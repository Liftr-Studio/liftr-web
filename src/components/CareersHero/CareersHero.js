import * as React from "react"
import {
  content,
  subtext,
  wrapper
} from "./CareersHero.module.css"
import { PageContainer } from "../PageContainer";
import { CTA } from "../CTA";
import { Heading } from "../Heading/Heading";

const CareersHero = () => (
  <section className={wrapper}>
    <PageContainer>
      <div className={content}>
        <Heading theme={6} importance={1}>Re-launch your career.</Heading>
        <Heading theme={7} importance={2}>Step into our launch pad.</Heading>
        <p className={subtext}>Join Liftr's mission in launching (customers or projects) into interstellar success. From day 1 the focus is in "we're in it together" and you'll get all the support you need to reach the stars.</p>
        <CTA to="/contact" importance="secondary" hasArrowIcon>Ship products faster</CTA>
      </div>
    </PageContainer>
  </section>
)

export { CareersHero }
