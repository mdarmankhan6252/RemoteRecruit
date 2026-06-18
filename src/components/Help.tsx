import { AiOutlineCheck } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import icon from '../assets/icon.png'


const Help = () => {
    return (
        <div>
            <div className="px-6">
                <h2 data-aos="fade-up" data-aos-duration="1400" className="text-3xl font-semibold text-center">Help Is One Click Away</h2>

                <div className="max-w-4xl mx-auto  flex items-center gap-6 pt-10 flex-col md:flex-row">
                    {/* free card */}
                    <div data-aos="fade-right" data-aos-duration="1600" className="shadow border border-gray-200 p-6 rounded-2xl bg-white w-full">
                        <div className="flex gap-4">
                            <div className="flex items-center justify-center bg-[#ECF2FF] flex-col p-6 rounded-2xl">
                                <h3 className="text-[#52B4DA] text-2xl">Free</h3>
                                <p className="text-slate-500">Basic</p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <AiOutlineCheck className=" bg-[#387AAC] p-0.5 rounded-full text-white" />
                                    <span className="text-sm text-black/90 tracking-wide">1 Active Job</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiOutlineCheck className=" bg-[#387AAC] p-0.5 rounded-full text-white" />
                                    <span className="text-sm text-black/90 tracking-wide">Basic List Placement</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IoCloseOutline className=" bg-gray-400 p-0.5 rounded-full text-white" />
                                    <span className="text-sm text-black/90 tracking-wide">Unlimited Job Applicants</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IoCloseOutline className=" bg-gray-400 p-0.5 rounded-full text-white" />
                                    <span className="text-sm text-black/90 tracking-wide">Invite Anyone to Apply to Your Jobs</span>
                                </li>
                            </ul>
                        </div>
                        <button className="border rounded-2xl p-3 border-cyan-500 tracking-wider font-semibold hover:bg-linear-to-t hover:from-[#204389] hover:to-[#3067A3] mt-8 hover:text-white duration-300 transition-colors cursor-pointer w-full text-[15px]">Get Started</button>
                    </div>

                    {/* premium card */}
                    <div data-aos="fade-left" data-aos-duration="1600" className="shadow border border-gray-200 p-6 rounded-2xl bg-white w-full">
                        <div className="flex gap-4">
                            <div className="bg-[#ECF2FF] flex-col  rounded-2xl">
                                <button className="flex items-center gap-2 bg-[#C2EEFF] py-1 px-2 rounded-full -mt-2">
                                    <div className="bg-white p-1 rounded-full w-6 h-6 flex items-center justify-center">
                                        <img src={icon} alt="" className="w-3 " />
                                    </div>
                                    <span className="text-sm font-semibold tracking-wide text-black/80">Premium</span>

                                </button>

                                <div className=" pt-6 text-center">
                                    <h3 className="text-2xl text-[#1E3E85] font-medium">$79.99</h3>
                                    <p className="text-gray-500 text-center w-full text-sm">Per Month</p>
                                </div>

                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <AiOutlineCheck className=" bg-[#387AAC] p-0.5 rounded-full text-white" />
                                    <span className="text-sm text-black/90 tracking-wide">Unlimited Job Posts</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiOutlineCheck className=" bg-[#387AAC] p-0.5 rounded-full text-white" />
                                    <span className="text-sm text-black/90 tracking-wide">Instant Job Post Approval</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiOutlineCheck className=" bg-[#387AAC] p-0.5 rounded-full text-white" />
                                    <span className="text-sm text-black/90 tracking-wide">Premium List Placement</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiOutlineCheck className=" bg-[#387AAC] p-0.5 rounded-full text-white" />
                                    <span className="text-sm text-black/90 tracking-wide">Unlimited Job Applicants</span>
                                </li>

                            </ul>
                        </div>
                        <button className="rounded-2xl p-3 tracking-wider font-semibold text-white mt-8 bg-linear-to-t from-[#204389] to-[#3067A3] duration-300 transition-all cursor-pointer w-full text-[15px]">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Help;