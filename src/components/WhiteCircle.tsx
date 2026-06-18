
export interface IPosition{
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
}

const WhiteCircle = ({top, left, bottom, right}: IPosition) => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1700" className={`w-90 h-90 bg-white/4 rounded-full absolute ${top} ${left} ${bottom} ${right} `}/>
    );
};

export default WhiteCircle;