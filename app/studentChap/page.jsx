'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/router';

const page = () => {
    function Form() {
        const { register, handleSubmit, formState: { errors } } = useForm();
        // const router = useRouter();

        const onSubmit = (data) => {
            console.log(data); // Submit data to server or process here
            router.push('/success'); // Redirect to success page after submission
        };

        return (
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Name:
                        </label>
                        <input
                            type="text"
                            {...register('name', { required: true })}
                            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        {errors.name && <span className="text-red-500 text-xs">Please enter your name.</span>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        {errors.email && <span className="text-red-500 text-xs">Please enter a valid email address.</span>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="age" className="text-sm font-medium text-gray-700">
                            Age:
                        </label>
                        <input
                            type="number"
                            {...register('age', { required: true })}
                            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        {errors.age && <span className="text-red-500 text-xs">Please enter your age.</span>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone_number" className="text-sm font-medium text-gray-700">
                            Phone Number:
                        </label>
                        <input
                            type="tel"
                            {...register('phone_number', { required: true })}
                            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        {errors.phone_number && <span className="text-red-500 text-xs">Please enter your phone number.</span>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="college_name" className="text-sm font-medium text-gray-700">
                            College Name:
                        </label>
                        <input
                            type="text"
                            {...register('college_name', { required: true })}
                            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        {errors.college_name && <span className="text-red-500 text-xs">Please enter your college name.</span>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="mentor_name" className="text-sm font-medium text-gray-700">
                            Mentor Name (Optional):
                        </label>
                        <input
                            type="text"
                            {...register('mentor_name')}
                            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md mt-4">
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    return (
        <>
        <div className="container">

    
            <section className="text-gray-400 body-font bg-gray-900">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap w-full mt-3 ">
                        <div className="lg:w-1/2 w-full lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Wanna Register for the Student Lead?</h1>
                            <div className="h-1 w-80 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src="leader.png" style={{objectFit:"contain"}}/>
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">Giveaways</h2>
                                <p className="leading-relaxed text-base">Get exciting goodies and Swags</p>
                                <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">Multi Level Expansion</h2>
                                <p className="leading-relaxed text-base">Expand the platform beyond schools and universities to include rural communities and citizen groups.</p>
                                <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">Build a Phygital Community</h2>
                                <p className="leading-relaxed text-base">Organize physical meetups, workshops, and innovation boot camps to build a strong student network.</p>
                                <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <Form />
            </div>
        </>
    );
};

export default page;

