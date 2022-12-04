import * as React from "react"
import { useParallax } from "react-scroll-parallax"
import classNames from "classnames";
import {
  content,
  phoneStarMain,
  phoneStarLeft,
  phoneStarRight,
  star,
  star1,
  star2,
  star3,
  star4,
  star5,
  star6,
  star7,
  star8,
  star9,
  star10,
  star11,
  star12,
  starLayer1,
  starLayer2,
  starLayer3,
  subtext,
  wrapper
} from "./CareersHero.module.css"
import { PageContainer } from "../PageContainer";
import { CTA } from "../CTA";
import { Heading } from "../Heading/Heading";
import phoneStar from "../../images/careers-hero/phone-star.svg"
import starTheme1 from "../../images/star-theme-1.svg"
import starTheme2 from "../../images/star-theme-2.svg"
import starTheme3 from "../../images/star-theme-3.svg"

const CareersHero = () => {
  const target = React.useRef(null);

  const starLayer1Parallax = useParallax({
    speed: 50,
    targetElement: target.current,
  });

  const starLayer2Parallax = useParallax({
    speed: 25,
    targetElement: target.current,
  });

  const starLayer3Parallax = useParallax({
    speed: 10,
    targetElement: target.current,
  });

  const phoneStarMainParallax = useParallax({
    translateY: [80, -100],
    targetElement: target.current,
  });

  const phoneStarLeftParallax = useParallax({
    translateY: [80, -100],
    targetElement: target.current,
  });

  const phoneStarRightParallax = useParallax({
    translateY: [80, -100],
    targetElement: target.current,
  });

  return (
    <PageContainer extraClass={wrapper}>
      <div className={content}>
        <Heading theme={6} importance={1}>Re-launch your career.</Heading>
        <Heading theme={7} importance={2}>Step into our launch pad.</Heading>
        <p className={subtext}>Join Liftr's mission in launching (customers or projects) into interstellar success. From day 1 the focus is in "we're in it together" and you'll get all the support you need to reach the stars.</p>
        <CTA to="mailto:contact@liftr.studio?subject=Business enquiry from the website" importance="secondary" hasArrowIcon>Ship products faster</CTA>
      </div>
      <img src={phoneStar} alt="" className={phoneStarMain} ref={phoneStarMainParallax.ref} />
      <img src={phoneStar} alt="" className={phoneStarLeft} ref={phoneStarLeftParallax.ref} />
      <img src={phoneStar} alt="" className={phoneStarRight} ref={phoneStarRightParallax.ref} />

      <div className={starLayer1} ref={starLayer1Parallax.ref}>
        <img src={starTheme1} alt="" className={classNames(star, star1)} />
        <img src={starTheme1} alt="" className={classNames(star, star2)} />
        <img src={starTheme1} alt="" className={classNames(star, star3)} />
        <img src={starTheme3} alt="" className={classNames(star, star9)} />
        <img src={starTheme3} alt="" className={classNames(star, star10)} />
      </div>
      <div className={starLayer2} ref={starLayer2Parallax.ref}>
        <img src={starTheme2} alt="" className={classNames(star, star4)} />
        <img src={starTheme2} alt="" className={classNames(star, star5)} />
        <img src={starTheme2} alt="" className={classNames(star, star6)} />
        <img src={starTheme3} alt="" className={classNames(star, star11)} />
      </div>
      <div className={starLayer3} ref={starLayer3Parallax.ref}>
        <img src={starTheme2} alt="" className={classNames(star, star7)} />
        <img src={starTheme2} alt="" className={classNames(star, star8)} />
        <img src={starTheme3} alt="" className={classNames(star, star12)} />
      </div>


    </PageContainer>
  )
}

export { CareersHero }
