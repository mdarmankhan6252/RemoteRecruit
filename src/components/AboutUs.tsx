import aboutImg from '../assets/about-img.png';
import TitleButton from '../shared/TitleButton';

const AboutUs = () => {
    return (
        <div className="px-6 max-w-7xl mx-auto flex items-center justify-between flex-col sm:flex-row gap-10">

            <div className="space-y-6">
                <TitleButton title='Global Reach'/>

                <h2 className="text-3xl md:text-4xl tracking-wide">The First Fully Global Job Board, Anywhere, Ever</h2>

                <p className="text-[#11142DA4] text-sm tracking-wide leading-8">RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.</p>

            </div>

            <div>
                <img src={aboutImg} alt="" />

            </div>

        </div>
    );
};

export default AboutUs;