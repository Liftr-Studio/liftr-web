import * as React from "react"
import { Link } from "gatsby";
import {
  contact,
  content,
  socialMedia,
  socialMediaIcon,
  socialMediaItem,
  star,
  wrapper,
} from "./Footer.module.css"
import { PageContainer } from "../PageContainer";
import liftrLogo from "../../images/liftr-logo-dark.svg"
import footerStar from "../../images/footer-star.svg"
// import twitterLogo from "../../images/social-media/twitter.svg"
import linkedinLogo from "../../images/social-media/linkedin.svg"

const Footer = () => (
  <PageContainer>
    <footer className={wrapper}>
      <div className={content}>
        <img src={liftrLogo} alt="liftr" />
        <address className={contact}>
          Chat to us<br />
          hi(at)liftr(dot)studio<br />
          +44 77567 890 900<br />
          <Link to="/privacy-policy">Privacy Policy</Link>
        </address>
      </div>
      <div className={socialMedia}>
        {/* <Link to="/" target="_blank" className={socialMediaItem}>
          <img className={socialMediaIcon} src={twitterLogo} alt="Twitter" />
        </Link> */}
        <Link to="https://www.linkedin.com/company/liftr/about/" target="_blank" className={socialMediaItem}>
          <img className={socialMediaIcon} src={linkedinLogo} alt="LinkedIn" />
        </Link>
      </div>
      <img src={footerStar} alt="" className={star} />
    </footer>
  </PageContainer>
)

export { Footer }
