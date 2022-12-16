import * as React from "react"
import { useParallax } from "react-scroll-parallax"
import PropTypes from 'prop-types'
import classNames from "classnames"
import {
  content,
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
  wrapper,
} from "./ParallaxHero.module.css"
import { PageContainer } from "../PageContainer";
import starTheme1 from "../../images/star-theme-1.svg"
import starTheme2 from "../../images/star-theme-2.svg"
import starTheme3 from "../../images/star-theme-3.svg"

const ParallaxHero = ({ children }) => {
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

  return (
    <PageContainer extraClass={wrapper}>
      <div className={content}>
        {children}
      </div>

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

ParallaxHero.propTypes = {
  children: PropTypes.any.isRequired,
}

export { ParallaxHero }
