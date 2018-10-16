import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Services = () => {
  const data = useStaticQuery(graphql`
  query ServiceQuery {
    allStrapiServices {
      nodes {
        description
        servicename
        image {
          publicURL
        }
      }
    }
  }
  
  `)
  return (
    <section className="container mx-auto px-6 p-10">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      Services
    </h2>
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">{ data.allStrapiServices.nodes[0].servicename }</h4>
        <p className="text-gray-600 mb-8">
        { data.allStrapiServices.nodes[0].description }
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={ data.allStrapiServices.nodes[0].image.publicURL } alt="Image"/>
      </div>
    </div>

    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <img src={ data.allStrapiServices.nodes[1].image.publicURL } alt="Image" />
      </div>
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">{ data.allStrapiServices.nodes[1].servicename }</h4>
        <p className="text-gray-600 mb-8">
        { data.allStrapiServices.nodes[1].description }
        </p>
      </div>
    </div>

    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">{ data.allStrapiServices.nodes[2].servicename }</h4>
        <p className="text-gray-600 mb-8">
        { data.allStrapiServices.nodes[2].description }
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={ data.allStrapiServices.nodes[2].image.publicURL } alt="Image" />
      </div>
    </div>
  </section>
)

}

export default Services
