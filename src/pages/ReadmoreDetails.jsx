import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ReadmoreDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    console.log(data)
    useEffect(() => {
        fetch('../fakedata.json')
            .then(res => res.json())
            .then(data => {
                const findData = data.find(item => item.id === parseInt(id))
                setData(findData)
            })
    }, []);


    return (
        <div className='flex items-center justify-center h-screen p-5 details-bg'>
            <div className="relative flex w-full lg:max-w-[48rem] flex-col lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-white rounded-r-none lg:w-2/5 shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={data.image}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {data.time}
                    </h6>
                    <h6 className="block font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-gray-500 uppercase">
                        {data.organizer}
                    </h6>
                    <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {data.location}
                    </h6>
                    <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-500 uppercase">
                        {data.date}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {data.title}
                    </h4>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <span className='header-font'>Course fee:</span> ${data.price}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {data.description}
                    </p>
                    <Link to='/' className="inline-block" href="#">
                        <button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all border rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            GO HOME
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                    <a className="inline-block ml-3" target='_blank' href={data.registrationLink}>
                        <button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all border rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReadmoreDetails;