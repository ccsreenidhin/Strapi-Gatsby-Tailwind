
import React from "react"

const Testimonials = () => (
    <section className="container mx-auto px-6 p-10">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      Contact Us
    </h2>
    <div className="flex flex-wrap mb-4">
      <div className="w-full sm:w-1/2 bg-gray-100 items-center">
        <h4 className="text-3xl text-gray-800 font-bold mb-3 p-6">Feel Free to Contact Us</h4>
        <div className="text-gray-600 mb-8 p-12 sm:p-4">
          <p>Sree Dhanya Homes Pvt. Ltd.,</p>
          <p>31/747, Sasthamangalam P.O, Trivandrum-695010</p>
          <p>Phone: +91 89439 11111</p>
          <p>Email: enquiry@sreedhanyahomes.com</p>
        </div>

      </div>
      <div className="w-full sm:w-1/2 bg-gray-100 py-3">
        <div className="m-auto content-center">
        <form action="/action_page" className="md:m-8">
          <label for="name" className="block text-gray-500 font-bold mb-1 md:mb-0">Name</label>
          <div className="w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text" id="name" name="name" placeholder="Your name.." />
          </div>
          <label for="email" className="block text-gray-500 font-bold mb-1 md:mb-0">Email</label>
          <div className="w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text" id="email" name="email" placeholder="youremail@domain.com" />
          </div>
          <label className="block text-gray-500 font-bold mb-1 md:mb-0" for="subject">Subject</label>
          <div className="w-full">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="subject" name="subject" placeholder="Write something.."></textarea>
          </div>
          <button className="bg-white font-bold rounded-full py-2 px-6 mt-4 shadow-lg uppercase tracking-wider">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  </section>

)

export default Testimonials
