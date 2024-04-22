import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'
const Hero = () => {
  return (
<>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Join us and be a part!
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Most of the time, an idea is destroyed the moment it is born, even though it may have the potential to solve a problem out of a normal person's comprehension. This idea may have the potential to solve a social/economic/national level problem. </p> 
      <br></br>
      <p className='mb-6'>Through our initiative, we aim to provide a <b>(digital)</b> platform for school/university students to submit such ideas under one roof. We will be forming a community at the school/university <b>(physical)</b> level for the students who are very active in developing either technical or social skills in our society; just like this, we will provide a platform for them to translate their ideas into reality. </p>

      <div className="flex justify-center">
        <Link href="/ideas"><button className=" inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit the ideas</button></Link>
        <Link href="/studentChap"><button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Register for the Student Chapter</button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero.jpg"
            width={700}
            height={700}
        />
    </div>
  </div>
</section>

</>
  )
}

export default Hero
