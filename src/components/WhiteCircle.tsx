
export interface IPosition{
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
}

const WhiteCircle = ({top, left, bottom, right}: IPosition) => {
    return (
        <div>
            <div className={`w-90 h-90 bg-white/4 rounded-full absolute ${top} ${left} ${bottom} ${right} `}/>
        </div>
    );
};

export default WhiteCircle;