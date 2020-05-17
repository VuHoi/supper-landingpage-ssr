import Nav from '../components/Nav'
import React from 'react'
import {Helmet} from 'react-helmet'
const AboutPage = () => (
  <>
   <Helmet
        title="About | Hello next.js!"
        meta={[{ property: 'og:title', content: 'About' }]}
      />
    <Nav />
    <p>Hello, I'm the about page</p>
  </>
)

export default AboutPage