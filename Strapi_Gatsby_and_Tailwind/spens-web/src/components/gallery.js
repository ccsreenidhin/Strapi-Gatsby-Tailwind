import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Gallery = () => {
  const data = useStaticQuery(graphql`
  query GallaryQuery {
    allStrapiGalleries {
      nodes {
        image1 {
          childImageSharp {
            fluid(fit: FILL){
              ...GatsbyImageSharpFluid
          }
          }
        }
        image2 {
          childImageSharp {
            fluid(fit: FILL) {
              ...GatsbyImageSharpFluid
          }
          }
        }
        image3 {
          childImageSharp {
            fluid(fit: FILL) {
              ...GatsbyImageSharpFluid
          }
          }
        }
        image4 {
          childImageSharp {
            fluid(fit: FILL) {
              ...GatsbyImageSharpFluid
          }
          }
        }
        image5 {
          childImageSharp {
            fluid(fit: FILL) {
              ...GatsbyImageSharpFluid
          }
          }
        }
      }
    }
  }
  
  `
  )
    console.log(data);
    return (<section className="container mx-auto px-6 p-10">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      Gallary
    </h2>
      <div className="flex flex-wrap">
          <Img fluid={data.allStrapiGalleries.nodes[0].image1.childImageSharp.fluid} className="w-screen h-64 md:w-3/4" />
          <Img fluid={data.allStrapiGalleries.nodes[0].image2.childImageSharp.fluid} className="w-screen h-64 md:w-1/4"/>
      </div>

      <div className="flex flex-wrap">
          <Img fluid={data.allStrapiGalleries.nodes[0].image3.childImageSharp.fluid} className="w-screen h-64 md:w-1/5"/>
          <Img fluid={data.allStrapiGalleries.nodes[0].image4.childImageSharp.fluid} className="w-screen h-64 md:w-3/5"/>
          <Img fluid={data.allStrapiGalleries.nodes[0].image5.childImageSharp.fluid} className="w-screen h-64 md:w-1/5"/>
      </div>
  </section>
)
}

export default Gallery
