import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
  query AboutQuery {
    allStrapiAbouts {
      nodes {
        image {
          publicURL
        }
        description
      }
    }
  }
  `)
return (
<section>
    <div className="container mx-auto md:p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        About Us
      </h2>
      <div className="flex mb-4 p-3 flex-wrap">
        <div className="w-full md:w-1/2 h-full">
           <img src={ data.allStrapiAbouts.nodes[0].image.publicURL } className="md:m-6"></img>

        </div>
        <div className="w-full md:w-1/2 h-full">
          <div className="justify-center items-start p-12">
            <p className="uppercase tracking-loose justify-center pb-10 text-xl font-semibold">Who we are?</p>
            <p className="leading-normal mb-4 text-lg text-justify">
                { data.allStrapiAbouts.nodes[0].description }
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

export default About
