import * as React from "react"
import { HomepageHero } from "../components/HomepageHero/HomepageHero"
import { Layout } from "../components/Layout"

const IndexPage = () => {
  return (
   <Layout>
    <HomepageHero />
   </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Liftr Studio</title>
