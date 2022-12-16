import * as React from "react"
import emailjs from '@emailjs/browser';
import { SEO } from "../components/SEO"
import { Layout } from "../components/Layout"
import { SectionWrapper } from "../components/SectionWrapper"
import { ParallaxHero } from "../components/ParallaxHero";
import { CTA } from "../components/CTA"
import {
  utilityInput,
  utilityCenterText,
} from "../components/Layout/Layout.module.css"
import {
  ctaCustom,
  errorWrapper,
  formWrapper,
} from "./contact.module.css"
import { Heading } from "../components/Heading";

const ContactPage = () => {
  const [submitResult, setSubmitResult] = React.useState("pristine");
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_efh29h4', 'template_uhrxeqk', form.current, 'JjeoAfh-x5gKicycN')
      .then(() => {
        setSubmitResult("success")
      }, () => {
        setSubmitResult("error")
    });
  }

  return (
    <Layout showContact={false}>
      <ParallaxHero>
        <div className={utilityCenterText}>
          <Heading theme={6} importance={1}>Ship products faster.</Heading>
          <Heading theme={7} importance={2}>Launch something that matters.</Heading>
          <p>Launch or scale your product with Liftr by telling us a bit about how we can help.</p>
        </div>

        <SectionWrapper isCenter hasAlternativeFont>
          {
            (submitResult === "success") ? (
              <div>
                <Heading importance={2} theme={5}>Thank you for getting in touch with us!</Heading>
                <p>We will get back to you with a reply as soon as possible!</p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className={formWrapper}>
                <span className={utilityInput}>
                  <input type="text" name="user_name" placeholder="Name" required  />
                  <label htmlFor="user_name">Name</label>
                </span>
                <span className={utilityInput}>
                  <input type="email" name="user_email" placeholder="Email" required />
                  <label htmlFor="user_email">Email</label>
                </span>
                <span className={utilityInput}>
                  <input type="tel" name="user_phone" placeholder="Phone" pattern="^\+?\d+$" required />
                  <label htmlFor="user_phone">Phone</label>
                </span>
                <span className={utilityInput}>
                  <input type="text" name="user_company" placeholder="Company" required />
                  <label htmlFor="user_company">Company</label>
                </span>
                <span className={utilityInput}>
                  <textarea name="message" placeholder="Message" required />
                  <label htmlFor="message">Message</label>
                </span>
                {
                  (submitResult === "error") && (
                    <div className={errorWrapper}>
                      <Heading importance={2} theme={4}>Oops!</Heading>
                      <p>Something went wrong while trying to send your message. We're sorry about that. You can try again or you can send us an email at <a href="mailto:contact@liftr.studio">contact@liftr.studio</a>.</p>
                    </div>
                  )
                }
                <CTA tag="button" importance="tertiary" size="large" extraClass={ctaCustom} hasArrowIcon type="submit">Send</CTA>
              </form>
            )
          }
        </SectionWrapper>
      </ParallaxHero>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (<SEO title="Liftr Studio | Contact" />)
