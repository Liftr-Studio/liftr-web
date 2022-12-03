import * as React from "react"
import {
  items,
  item,
  itemIcon,
  section,
  wrapper,
} from "./WhatsInItForYou.module.css"
import { PageContainer } from "../PageContainer";
import { SectionWrapper } from "../SectionWrapper";
import { Heading } from "../Heading/Heading";
import ownershipImage from "../../images/whatforyou/ownership.svg"
import teamImage from "../../images/whatforyou/team.svg"
import greenfieldImage from "../../images/whatforyou/greenfield.svg"
import valuesImage from "../../images/whatforyou/values.svg"
import learnImage from "../../images/whatforyou/learn.svg"
import salaryImage from "../../images/whatforyou/salary.svg"

const WhatsInItForYou = () => (
  <section className={wrapper}>
    <PageContainer>
      <SectionWrapper isCenter hasAlternativeFont extraClass={section}>
        <Heading importance={2} theme={2} isCenter>What's in it for your growth journey?</Heading>

        <ul className={items}>
          <li className={item}>
            <img className={itemIcon} src={ownershipImage} alt="" />
            Ownership and empowerment from day one
          </li>
          <li className={item}>
            <img className={itemIcon} src={teamImage} alt="" />
            A team that values your own contributions and ideas
          </li>
          <li className={item}>
            <img className={itemIcon} src={greenfieldImage} alt="" />
            Working for greenfield industries on disruptive new products
          </li>
          <li className={item}>
            <img className={itemIcon} src={valuesImage} alt="" />
            Solid company values and a culture that values work / life balance
          </li>
          <li className={item}>
            <img className={itemIcon} src={learnImage} alt="" />
            Incentives to learn and grow and push your career progression forward
          </li>
          <li className={item}>
            <img className={itemIcon} src={salaryImage} alt="" />
            Competitive compensation package in the top 20% of pay and benefits
          </li>
        </ul>
      </SectionWrapper>
    </PageContainer>
  </section>
)

export { WhatsInItForYou }
