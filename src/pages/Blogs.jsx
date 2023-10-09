import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blogs = () => {
    return (
        <div>
            <div className='bg-black'><Header></Header></div>
            <div>
                <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                    <span className="text-primary mb-2 block text-lg font-semibold">
                                        Our Services
                                    </span>
                                    <h2
                                        className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                                    >
                                        What We Offer
                                    </h2>
                                    <p className="text-body-color text-base">
                                        There are many variations of passages of Lorem health and wellness events but
                                        the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-4 flex flex-wrap">
                            <div data-aos="fade-up" className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                                    >
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold">
                                        Health and Wellness Expos
                                    </h4>
                                    <p className="text-body-color">
                                        hese events often feature a wide range of exhibitors, workshops, and seminars on various health and wellness topics
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-down" className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-purple-500 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                                    >
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold">
                                        Yoga and Meditation Retreats
                                    </h4>
                                    <p className="text-body-color">
                                        Retreats offer a chance to immerse yourself in yoga and meditation practices, often in beautiful and peaceful settings
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-pink-400 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                                    >
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold">Fitness Competitions</h4>
                                    <p className="text-body-color">
                                        For those interested in fitness, events like marathons, triathlons, obstacle course races (e.g., Tough Mudder),
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                                    >
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold">Holistic Health Fairs</h4>
                                    <p className="text-body-color">
                                        These fairs often bring together alternative and holistic health practitioners, offering a wide range of therapies
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-up-right" className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-yellow-500 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                                    >
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold">
                                        Health Tech Conferences
                                    </h4>
                                    <p className="text-body-color">
                                        These events focus on the latest advancements in health technology, including wearable devices,
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-up-left" className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-lime-400 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                                    >
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold">Holistic Retreats</h4>
                                    <p className="text-body-color">
                                        These retreats combine various holistic practices such as yoga, meditation, sound therapy, and more
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Blogs;