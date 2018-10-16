import logo from "../images/gatsby-astronaut.png" 
import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Header = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allStrapiHeroes {
      nodes {
        description
        header
        bg_image {
          publicURL
        }
      }
    }
  }
  `)
  
  const headerStyle = {
    background: `url(${ data.allStrapiHeroes.nodes[0].bg_image.publicURL }) no-repeat scroll center`
  };

  return (
  <header className="bg-grey-lightest border-t-4 border-red" style={ headerStyle }>
  <div className="container px-4 mx-auto">
    <div className="block sm:flex mt-4">
      <div className="justify-center sm:justify-start sm:w-1/2 flex items-center">
        <a className="" href="#">
          <img src={ logo } className="h-8 inline-block align-middle"></img>
          <span className="inline-block align-middle font-bold text-2xl lg:text-4xl">SPNS</span>
        </a>
      </div>
      <div className="block text-center sm:w-1/2 sm:text-right font-semibold">
        <a href="#" className="inline-block mr-8 py-6 no-underline text-grey-darkest hover:text-black">About</a>
        <a href="#"
          className="inline-block mr-8 py-6 no-underline text-grey-darkest hover:text-black">Services</a>
        <a href="#" className="inline-block mr-8 py-6 no-underline text-grey-darkest hover:text-black">Gallary</a>
        <a href="#" className="inline-block py-6 no-underline text-grey-darkest hover:text-black">Contact</a>
      </div>
    </div>
    <div className="text-center mt-12 h-screen">
      <h1 className="text-4xl md:text-5xl text-black font-semibold font-headline tracking-wide">
        { data.allStrapiHeroes.nodes[0].header }
      </h1>
      <p className="text-xl md:text-2xl leading-normal text-grey-darkest max-w-lg mx-auto py-6 md:py-8">
        { data.allStrapiHeroes.nodes[0].description }
      </p>
      <a href="#"
        className="inline-block bg-blue-500 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-white border-2 border-red mx-2 font-semibold text-base sm:text-xl no-underline">Contact
        Us</a>
      <a href="#"
        className="inline-block border-2 bg-gray-500 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-red mx-2 font-semibold text-base sm:text-xl no-underline">Learn
        More</a>
    </div>
  </div>
</header>
)
}

export default Header
