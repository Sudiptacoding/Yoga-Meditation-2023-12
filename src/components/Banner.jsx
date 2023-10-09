import React, { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import 'animate.css';
import { Link } from 'react-router-dom';



const Banner = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000',
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '60vh',
    }

    return (
        <div className="slide-container">
            <Fade
                infinite
                arrows={false}
                prevArrow={{}}
                nextArrow={{}}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
            >
                {data.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.image})`, objectFit: 'cover' }}>
                            <span className='rounded-lg' style={spanStyle}>
                                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                                        {slideImage.location}</h5>
                                    <h5 className="mb-2 text-lg font-bold  text-gray-900 dark:text-white">{slideImage.time}</h5>
                                    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{slideImage.description}</p>
                                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                        <Link to={`/moredetails/${slideImage.id}`} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Banner;