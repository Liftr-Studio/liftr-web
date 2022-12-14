import * as React from "react"
import { SEO } from "../components/SEO"
import { Layout } from "../components/Layout"
import { PageContainer } from "../components/PageContainer"
import { SectionWrapper } from "../components/SectionWrapper"
import { Heading } from "../components/Heading"
import { Media } from "../components/Media"
import claudiuImage from "../images/about-us/claudiu.jpg"
import sebImage from "../images/about-us/seb.jpg"

const AboutPage = () => {
  return (
    <Layout>
      <PageContainer>
        <SectionWrapper>
          <Heading theme={7} importance={1} isCenter>Liftr’s Leadership team</Heading>

          <Media image={claudiuImage}>
            <Heading importance={2} theme={3}>Claudiu Udrea (CEO)</Heading>
            <p>Claudiu has spent the last decade building up the product function at Funding Circle, the UK’s largest business loans platform, joining in the startup days and navigating the high growth through scale-up, IPO and beyond. With an education in software engineering and a background in building product cross functional teams in international high growth / high pressure environments, he is committed to building Liftr into the place where passionate founders can rocket their product development to ship knockout products.</p>
          </Media>

          <Media image={sebImage} flip>
            <Heading importance={2} theme={3}>Sebastian Stan (COO)</Heading>
            <p>Sebastian is a passionate technologist with 20 years of experience building and running motivated  engineering teams that build great products. He has worked in both large organisations like Google or Amdocs as well as scale-up unicorns like Funding Circle, Depop/Etsy helping them build highly productive teams in the US, UK, Germany, India, Malaysia and other countries.</p>
          </Media>
        </SectionWrapper>
      </PageContainer>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (<SEO title="Liftr Studio | About us" />)
