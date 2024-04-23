import React from 'react'

const page = () => {
  return (
<section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Opportunities that we provide</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Our initiative aims to collaborate students from across domains under one roof, and provide their ideas the best possible nurturing!</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="ICON1.png" alt="content" style={{objectFit:"contain"}}/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Community Engagement</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Students and Student Chapters</h2>
          <p className="leading-relaxed text-base">A platform to connect the "Student Chapters" of various colleges and form a digital society wherein we can collect various project ideas from the communities formed inside the schools/universities.
</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="icon2.png" alt="content" style={{objectFit:"contain"}}/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Society Building</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">1+1=11</h2>
          <p className="leading-relaxed text-base">Like-minded people who actually wish to create change in our nation can be brought under one roof.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="icon3.png" alt="content" style={{objectFit:"contain"}}/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Build and Develop</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Guidance and Mentorship</h2>
          <p className="leading-relaxed text-base">Get a chance to learn how to visualize your ideas into reality by learning from domain experts and seek guidance.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="icon4.png" alt="content" style={{objectFit:"contain"}}/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Sponsorship</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Financially Boost your Project</h2>
          <p className="leading-relaxed text-base">Get a chance to seek investments, financial aids and grants from top investors, NGOs and policy makers. </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default page
