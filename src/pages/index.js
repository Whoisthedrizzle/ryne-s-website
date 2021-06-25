import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { picture } from './index.module.css'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Ryne Iacono">
        <StaticImage alt="Minneapolis in the evening"
          src="../images/minneapolis.jpg" className={picture}/>
        <p>I am a software engineer based in the Twin Cities.</p>
        <StaticImage alt="Infinite Campus Headquarters"
          src="../images/InfiniteCampus.jpg" className={picture}/>
        <p>I currently work for Infinite Campus located in Blaine where I develop software to further the company goal of Transforming K12 Education.</p>
        <p> This site is currently under construction and will be enhanced when I can find the time. </p>
      </Layout>
    </main>
  )
}

export default IndexPage
