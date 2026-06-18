import logo from '../assets/logo.png'
import iconLogo from '../assets/icon_logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

    const socialLinks = [
        { icon: FaFacebook, path: '' },
        { icon: FaInstagram, path: '' },
        { icon: FaXTwitter, path: '' },
        { icon: FaLinkedin, path: '' },
        { icon: FaSnapchat, path: '' },
    ];


    return (
        <div className="bg-linear-to-br from-[#336DA6] to-[#1E3E85] relative pt-44 -mt-24 -z-10">


            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 160"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="block w-full h-35 rotate-180"
                >
                    <path
                        d="M0,0 C480,180 960,0 1440,150 L1440,160 L0,160 Z"
                        fill="white"
                    />
                </svg>
            </div>

            <div className='max-w-7xl mx-auto px-6 pb-16 flex items-center justify-between'>
                <img data-aos="fade-up" data-aos-duration="1200" src={logo} alt="logo"  />
                <div data-aos="fade-up" data-aos-duration="1000" className='flex items-center gap-3'>
                    {socialLinks.map(({ icon: Icon, path }, i) => (
                        <a key={i} href={path}>
                            <Icon size={30} className='bg-white/10 p-2 rounded-full text-white/80' />
                        </a>
                    ))}
                </div>
            </div>
            <hr className='border-slate-500' />
            <div className='p-5 flex items-center justify-center'>
                <img src={iconLogo} alt=""  />
            </div>

        </div>
    );
};

export default Footer;