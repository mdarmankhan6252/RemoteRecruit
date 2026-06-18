

const TitleButton = ({title} : {title: string}) => {
    return (
        <button className="bg-cyan-100 text-sm px-5 py-1 rounded-full tracking-wide text-black/80">{title}</button>
    );
};

export default TitleButton;