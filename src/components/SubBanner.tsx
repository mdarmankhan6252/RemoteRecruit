import { IoMdArrowForward } from 'react-icons/io';
import aboutImg from '../assets/about-2.png';

const SubBanner = () => {
    return (
        <div className="bg-[#E5E9FD] md:pr-6 ">

            <div className="flex items-center justify-between flex-col-reverse md:flex-row">
                <div className='md:pt-10'>
                    <img data-aos="fade-up" data-aos-duration="1500" src={aboutImg} alt="" className='w-full h-full' />
                </div>

                <div className='flex-1 pt-20 md:pt-0 space-y-6'>
                    <h4 data-aos="fade-up" data-aos-duration="1000" className='font-semibold tracking-wider text-blue-950'>Are you ready?</h4>
                    <h1 data-aos="fade-up" data-aos-duration="1400" className='text-3xl md:text-4xl max-w-sm leading-12'>Help is only a few clicks away!</h1>
                    <p data-aos="fade-up" data-aos-duration="1800" className='text-[#767784]'>Click Below to get set up super quickly and find help now!</p>

                    <button data-aos="fade-up" data-aos-duration="2200" className='bg-[#CFE0F7] flex items-center gap-2 p-2 px-5 rounded-full border border-[#b4c9e6] hover:bg-[#b8c8e0] duration-300 transition-colors cursor-pointer'>
                        <IoMdArrowForward className='bg-cyan-500 rounded-full text-white text-2xl p-1'/>
                        <span className='tracking-wide text-blue-950 font-medium'>
                            Get Started                            
                        </span>
                    </button>
                </div>

            </div>


        </div>
    );
};

export default SubBanner;