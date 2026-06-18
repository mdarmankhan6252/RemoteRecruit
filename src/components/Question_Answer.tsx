

const Question_Answer = () => {
    const questions = [
        {
            question: "Do I have to sign a long-term contract?",
            answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr"
        },
        {
            question: "Can I pay for a whole year?",
            answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage "
        },
        {
            question: "What if I need help?",
            answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party "
        },

    ]
    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <h3 className="text-3xl font-medium">Common Questions</h3>

            <div className="space-y-8 mt-10">

                {
                    questions.map((item, index) => (
                        <div data-aos="fade-up" data-aos-duration="1400" key={index}>
                            <h4 className="font-medium text-lg pb-2">{item.question}</h4>
                            <p className="text-[#6D6E7A] text-[15px] tracking-wider leading-8">{item.answer}</p>
                        </div>
                    ))
                }

            </div>

            <button data-aos="fade-up" data-aos-duration="1800" className="border rounded-2xl p-3 border-cyan-500 tracking-wider font-semibold text-blue-950 mt-8 hover:bg-cyan-500 hover:text-white duration-300 transition-all cursor-pointer">More Questions</button>
        </div>
    );
};

export default Question_Answer;