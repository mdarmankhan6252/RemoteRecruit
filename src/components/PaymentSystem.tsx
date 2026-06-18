import TitleButton from "../shared/TitleButton";
import paymentImage from '../assets/payment-img.png'

const PaymentSystem = () => {
    return (
        <div className="px-6 max-w-7xl mx-auto flex items-center justify-between flex-col sm:flex-row gap-10">

            <div>
                <img src={paymentImage} alt="" />

            </div>

            <div className="space-y-6">
                <TitleButton title='Global Reach'/>

                <h2 className="text-3xl md:text-4xl tracking-wide">The First Fully Global Job Board, Anywhere, Ever</h2>

                <p className="text-[#11142DA4] text-sm tracking-wide leading-8">RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.</p>

            </div>

        </div>
    );
};

export default PaymentSystem;