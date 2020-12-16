import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Model from "../components/layouts/layout1"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
     <Model />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>*/}
     
    <Link to="/home/">Home</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
 
  </Layout>
  
  
)

export default IndexPage
