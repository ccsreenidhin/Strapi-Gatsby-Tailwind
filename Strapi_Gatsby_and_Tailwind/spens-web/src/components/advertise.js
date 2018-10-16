import React from "react"

const Advertise = () => {

  const backgroundStyle = {
    background: "#355C7D",
    background: "-webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)",
    background: "linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)"
  };


  return (
  <section style={ backgroundStyle }>  
    <div className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-2 text-white">
        Start your next project with us.
      </h2>
      <h3 className="text-2xl mb-8 text-gray-200">
        Choose us for your dream project. We can realize the dream for you.
      </h3>

      <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
        Contact Us
      </button>
    </div>
  </div>
</section>
)
}

export default Advertise
