import React from "react"

const Footer = () => (
    <footer className="py-6 bg-black text-white">
    <div className="container px-4 mx-auto">
      <div className="block sm:flex mt-4">
        <div className="justify-center sm:justify-start sm:w-1/2 flex items-center">
          <a className="font-bold text-2xl lg:text-4xl" href="#">
            SPNS
          </a>
        </div>
        <div className="block text-center sm:w-1/2 sm:text-right font-semibold sm:justify-center">
        © {new Date().getFullYear()}, Copyright
          {` `}
          <a href="https://www.spensconstructions.com">SPNS</a> 
        </div>
      </div>
      </div>
  </footer>
)

export default Footer
