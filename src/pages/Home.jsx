import React, { useContext, useEffect, useState } from 'react';
import { UserProvider } from '../context/Usercontext';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    const { name } = useContext(UserProvider)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    return (
        <div >
            <div className=' banner-bg'>
                <Header></Header>
                <div className='flex items-center justify-center py-40'><h1 className='text-4xl text-center text-white header-font'>Join Us for a Journey to Wellness</h1></div>
            </div>
            <div> <Banner></Banner></div>

            <div className='py-8 about-bg'>
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
                    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-white ">Our Services</h2>
                    <p className="mb-12 text-lg text-white">Here is a few of the awesome Services we provide.</p>
                    <div className="w-full">
                        <div className="flex flex-col w-full mb-10 sm:flex-row">
                            <div data-aos="fade-right" className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Daily Surfing Lessons</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Dive into the thrilling world of surfing with daily lessons led by experienced instructors. Whether you're a beginner catching your first wave or an intermediate surfer looking to improve, our tailored sessions will help you ride the waves confidently..</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="w-full sm:w-1/2">
                                <div className="relative h-full ml-0 md:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Yoga and Meditation</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Reconnect with your inner self through daily yoga and meditation sessions. The tranquil surroundings of Peniche create the ideal backdrop for finding inner peace, improving flexibility, and enhancing your overall well-being.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-5 sm:flex-row">
                            <div data-aos="zoom-in-up" className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Stunning Coastal Accommodation</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Rest in comfort and style at our handpicked accommodations, which provide easy access to both the beach and yoga studio. Wake up to the sound of crashing waves and enjoy </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Healthy Meals</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Savor delicious, wholesome meals that are both nourishing and energy-boosting. Our expert chefs prepare a variety of dishes that cater to different dietary </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="w-full sm:w-1/2">
                                <div className="relative h-full ml-0 md:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                    <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Excursions and Activities</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                                            that eliminate a large amount of manual work and accelerate the development process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* service list */}


            <div className='footer-bg'>
                <div><h2 class="mb-1 text-3xl font-extrabold leading-tight text-white text-center header-font pt-6">All Services List</h2></div>
                <div className='grid grid-cols-1 gap-6 p-10 lg:grid-cols-4 md:grid-cols-2 '>
                    {
                        data.map((item, i) => {
                            return <Link to={`/moredetails/${item.id}`} key={i} data-aos="zoom-out">
                                <div class="block  rounded-lg border border-primary bg-gray-100  shadow-xl">
                                    <div
                                        class="border-b-2 border-success text-sm header-font px-6 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50">
                                        {item.location}
                                    </div>
                                    <div class="p-2 cursor-pointer">

                                        <div className="relative overflow-hidden">
                                            <div className="relative group">
                                                <img src={item.image} alt="Image" className="w-full h-auto transition-transform duration-300 transform rounded-md group-hover:scale-110" />
                                                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                                                    <div className=''>
                                                        <Link to={`/moredetails/${item.id}`} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            Read more
                                                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                            </svg>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        className="px-6 py-1  font-sm border-success text-neutral-600  dark:text-neutral-50">
                                        <span className='header-font'>Course fee:</span> ${item.price}
                                    </div>
                                    <div
                                        className="px-6 pb-3 font-sm  text-neutral-600  dark:text-neutral-50">
                                        {item.description}
                                    </div>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>

            <div className='py-9'>
                <h1 className='pb-8 text-2xl text-center header-font'>Docter Service</h1>
                <div className='lg:px-32'>
                    <img className='w-[340px] h-[337px] mx-auto' src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/6414603ac81d5e13ba560419/pexels-photo-118174277.png" alt="" />
                    <div className='flex flex-col items-center justify-center gap-10 p-5 lg:flex-row'>
                        <div data-aos="fade-right" className='flex-1 text-right'>
                            <h1 className='text-6xl font-extrabold'>01</h1>
                            <h2 className='py-4 text-2xl font-bold'>DOCTER SERVICES</h2>
                            <p>Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Faucibus ornare suspendisse sed nisi lacus. Quisque egestas diam in arcu cursus euismod quis viverra. Pretium vulputate sapien nec sagittis aliquam. Orci nulla pellentesque dignissim enim sit amet venenatis.</p>
                        </div>
                        <div data-aos="fade-left" className='flex-1 text-left'>
                            <h1 className='text-6xl font-extrabold'>02</h1>
                            <h2 className='py-4 text-2xl font-bold'>OUR PROCESS</h2>
                            <p>Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Faucibus ornare suspendisse sed nisi lacus. Quisque egestas diam in arcu cursus euismod quis viverra. Pretium vulputate sapien nec sagittis aliquam. Orci nulla pellentesque dignissim enim sit amet venenatis.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5 lg:p-40 card-blog'>
                <div className='flex flex-col flex-wrap items-center justify-center lg:flex-row' >
                    <div data-aos="fade-right" className='lg:h-[280px] w-full lg:w-[250px] border bg-white'><img style={{ height: 'inherit' }} className='w-full' src={data[0]?.image} alt="" /></div>
                    <div data-aos="fade-down" className='lg:h-[280px] w-full lg:w-[250px] border bg-white'>
                        <div className='p-5'>
                            <p className='header-font '>{data[0]?.title}</p>
                            <p className='pt-4 pb-4 text-sm font-normal text-gray-400'>{data[0]?.description}</p>
                            <p className='pb-4 text-gray-600'>{data[0]?.time}</p>
                            <Link to={`/moredetails/${data[0]?.id}`} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='lg:h-[280px] w-full lg:w-[250px] border bg-white'><img style={{ height: 'inherit' }} className='w-full' src={data[1]?.image} alt="" /></div>
                </div>
                <div className='flex flex-col flex-wrap items-center justify-center lg:flex-row' >
                    <div data-aos="fade-right" className='lg:h-[280px] w-full lg:w-[250px] border bg-white'>
                        <div className='p-5'>
                            <p className='header-font '>{data[1]?.title}</p>
                            <p className='pt-4 pb-4 text-sm font-normal text-gray-400'>{data[1]?.description}</p>
                            <p className='pb-4 text-gray-600'>{data[1]?.time}</p>
                            <Link to={`/moredetails/${data[1]?.id}`} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='lg:h-[280px] w-full lg:w-[250px] border bg-white'><img style={{ height: 'inherit' }} className='w-full' src={data[2]?.image} alt="" /></div>
                    <div data-aos="fade-left" className='lg:h-[280px] w-full lg:w-[250px] border bg-white'>
                        <div className='p-5'>
                            <p className='header-font '>{data[2]?.title}</p>
                            <p className='pt-4 pb-4 text-sm font-normal text-gray-400'>{data[2]?.description}</p>
                            <p className='pb-4 text-gray-600'>{data[2]?.time}</p>
                            <Link to={`/moredetails/${data[2]?.id}`} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Home;