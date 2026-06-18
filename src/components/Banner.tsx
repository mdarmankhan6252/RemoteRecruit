import logo from '../assets/logo.png'
import WhiteCircle from './WhiteCircle';

const Banner = () => {
    return (
        <div className="relative bg-[#22478C] w-full overflow-hidden">

            {/* circle — top left */}
            <WhiteCircle top='-top-16 -left-10' />

            <div className="px-6 xl:px-16 2xl:px-32">
                {/* Navigation bar */}
                <nav data-aos="fade-down" data-aos-duration="1000" className='py-6 flex items-center justify-between'>
                    <img src={logo} alt="RemoteRecruit logo" className='w-22' />
                    <div className='space-x-6'>
                        <button className='text-white hover:underline'>Sign In</button>
                        <button className='bg-[#49A0C6] text-white px-6 py-2 rounded-lg hover:bg-[#3d98bf] cursor-pointer duration-300 transition-colors'>
                            Sign Up
                        </button>
                    </div>
                </nav>

                {/* Main content */}
                <div className='text-center pt-24 lg:pt-32 pb-48 max-w-3xl mx-auto relative z-10'>
                    <h1 data-aos="fade-up" data-aos-duration="1300" className='text-4xl lg:text-5xl font-semibold text-white pb-6 leading-12'>
                        RemoteRecruit's Difference
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="1700" className='text-white/80 tracking-wide leading-8 text-[15px]'>
                        RemoteRecruit is connecting the world with an easy-to-use platform that lets
                        full-time, part-time, and freelance workers showcase their talents to businesses
                        that need them. With no paywalls, no fees, and no barriers, there's nothing but
                        you, your talents, and the next step in your career.
                    </p>

                    
                    <WhiteCircle top='bottom-0 right-0' />
                </div>
            </div>

            
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 160"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="block w-full h-35"
                >
                    <path
                        d="M0,20 C480,280 960,0 1440,20 L1440,160 L0,280 Z"
                        fill="white"
                    />
                </svg>
            </div>

        </div>
    );
};

export default Banner;