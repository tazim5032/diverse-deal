import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Slider = () => {

    return (
        <div className="pt-4">
            <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>

                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]" >

                        <div className=' absolute top-1/3 md:left-1/4 lg:left-1/4 left-10 space-y-4'>
                            <h1 className='text-5xl font-bold  text-white'

                            >Streamline Your Workflow</h1>

                            <p className='text-white  text-xl w-[90%] md:w-4/5 lg:w-3/4'>
                                Efficiently manage assignments and tasks with our intuitive platform. Stay organized and boost productivity like never before
                            </p>
                            <br />
                            <Link
                                to='/all-assignment'
                                className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize  rounded-md lg:w-auto bg-green-900'
                            >
                                Take an Assignment
                            </Link>
                        </div>
                        <img src={'https://i.ibb.co/jyvfTkV/a1.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Collaborate Seamlessly</h1>
                            <p className='text-white text-xl w-[90%] md:w-4/5 lg:w-3/4'>
                                Enable seamless collaboration among team members and students. Share resources, track progress, and communicate effortlessly.</p>
                                <br />
                            <Link
                                to='/all-assignment'
                                className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize  rounded-md lg:w-auto bg-green-900'
                            >
                                Take an Assignment
                            </Link>
                        </div>
                        <img src={'https://i.ibb.co/CK1BrTC/a2.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4  absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Stay on Track</h1>
                            <p className='text-white text-xl w-[90%] md:w-4/5 lg:w-3/4'>
                                Never miss a deadline again. Our advanced tracking system helps you stay on top of assignments, monitor progress, and meet goals.</p>
                                <br />
                            <Link
                                to='/all-assignment'
                                className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize  rounded-md lg:w-auto bg-green-900'
                            >
                                Take an Assignment
                            </Link>
                        </div>
                        <img src={'https://i.ibb.co/sv8029q/a3.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-to-tr from-[#000000CC] to-[#00000059] h-[calc(100vh-200px)]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Enhance Accountability</h1>
                            <p className='text-white text-xl w-[90%] md:w-4/5 lg:w-3/4'>
                                Promote accountability and transparency in your organization.
                                Assign tasks, set deadlines, and track performance with ease.</p>
                            <br />
                            <Link
                                to='/all-assignment'
                                className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize  rounded-md lg:w-auto bg-green-900'
                            >
                                Take an Assignment
                            </Link>
                        </div>
                        <img src={'https://i.ibb.co/LtVRmH8/a4.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;