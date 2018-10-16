/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../css/style.css"

import Header from "./header"
import Footer from "./footer"
import Gallery from "./gallery"
import Advertise from "./advertise"
import Seo from "./seo"
import About from "./about"
import Testimonials from "./testimonials"
import Services from "./service"
import Contacts from "./contact"

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Seo title="SPENS" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <About siteTitle={data.site.siteMetadata.title} />
      <Advertise siteTitle={data.site.siteMetadata.title} />
      <Services siteTitle={data.site.siteMetadata.title} />
      <Testimonials siteTitle={data.site.siteMetadata.title} />
      <Gallery siteTitle={data.site.siteMetadata.title} />
      <Contacts siteTitle={data.site.siteMetadata.title} />
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout
