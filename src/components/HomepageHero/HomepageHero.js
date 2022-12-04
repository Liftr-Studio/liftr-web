import * as React from "react"
import {
  content,
  innerWrapper,
  star,
  starBlue,
  starWhite,
  starCut,
  subtext,
  wrapper
} from "./HomepageHero.module.css"
import { PageContainer } from "../PageContainer";
import { CTA } from "../CTA";
import { Heading } from "../Heading/Heading";
import liftrStarLightBlue from "../../images/liftr-star-light-blue.svg"
import liftrStarWhite from "../../images/liftr-star-white.svg"

const HomepageHero = () => (
  <section className={wrapper}>
    <PageContainer extraClass={innerWrapper}>
      <div className={content}>
        <Heading theme={1} importance={1}>Launch sensational products</Heading>
        <p className={subtext}>We build high performance cross functional product, engineering and design teams for venture backed startups in e-commerce and financial services.</p>
        <CTA to="mailto:contact@liftr.studio?subject=Business enquiry from the website" hasArrowIcon>Ship products faster</CTA>
      </div>
      <div className={star}>
        <img className={starBlue} src={liftrStarLightBlue} alt="" />
        <span className={starCut}>
          <img className={starWhite}src={liftrStarWhite} alt="" />
        </span>
      </div>
    </PageContainer>
  </section>
)

export { HomepageHero }
