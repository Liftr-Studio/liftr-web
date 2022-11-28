import * as React from "react"
import {
  content,
  innerWrapper,
  star,
  starBlue,
  starWhite,
  starCut,
  subtext,
  title,
  wrapper
} from "./HomepageHero.module.css"
import { PageContainer } from "../PageContainer";
import { CTA } from "../CTA";
import liftrStarLightBlue from "../../images/liftr-star-light-blue.svg"
import liftrStarWhite from "../../images/liftr-star-white.svg"

const HomepageHero = () => (
  <section className={wrapper}>
    <PageContainer extraClass={innerWrapper}>
      <div className={content}>
        <h1 className={title}>Launch sensational products</h1>
        <p className={subtext}>We build high performance cross functional product, engineering and design teams for venture backed startups in e-commerce and financial services.</p>
        <CTA to="/contact" hasArrowIcon>Ship products faster</CTA>
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
