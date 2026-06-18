import TitleButton from "../shared/TitleButton";
import paymentImage from '../assets/payment-img.png'

const PaymentSystem = () => {
    return (
        <div className="px-6 max-w-7xl mx-auto flex items-center justify-between flex-col-reverse sm:flex-row gap-10">

            <div>
                <img src={paymentImage} alt="" data-aos="fade-up" data-aos-duration="1000" />

            </div>

            <div className="space-y-6">
                <TitleButton title='Actually Fee Free'/>

                <h2 data-aos="fade-up" data-aos-duration="1400" className="text-3xl md:text-4xl tracking-wide">Fee-Free Forever</h2>

                <p data-aos="fade-up" data-aos-duration="1800" className="text-[#11142DA4] text-sm tracking-wide leading-8">We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.</p>

            </div>

        </div>
    );
};

export default PaymentSystem;