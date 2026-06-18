import TitleButton from "../shared/TitleButton";
import customProfile from '../assets/custom-profile.png'


const CustomProfile = () => {
    return (
         <div className="px-6 max-w-7xl mx-auto flex items-center justify-between flex-col sm:flex-row gap-10">

            <div className="space-y-6">
                <TitleButton title='Custom Profile'/>

                <h2 className="text-3xl md:text-4xl tracking-wide">Showcase Your Talents</h2>

                <p className="text-[#11142DA4] text-sm tracking-wide leading-8">Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.</p>

            </div>

            <div>
                <img src={customProfile} alt="" className="md:min-w-xl" />

            </div>

        </div>
    );
};

export default CustomProfile;