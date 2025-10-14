type CardItem = {
    icon: string;
    subtitle: string;
    title: string;
};

const cardItems : CardItem[] = [
    {
        icon : './icon_1.svg',
        subtitle: 'guards in guard\'s nature',
        title:'Committed, Well Disciplined with High levels of Integrity'
    },
    {
        icon : './icon_2.svg',
        subtitle: 'guards persona',
        title:'Developed through frequent soft skills development initiatives'
    },
    {
        icon : './icon_3.svg',
        subtitle: 'technical competency',
        title:'periodic emergency response training viz fire, first aid, physical defensive techniques'
    },
];

const Card: React.FC<CardItem> = ({icon, subtitle, title}) => {
    return (
        <div className="flex flex-col w-1/3 p-[20px] border border-solid rounded-[18px] justify-start items-start">
            <div className="mb-[22px]">
                <img src={icon} alt="icon" className="w-[116px] h-[116px] object-contain" />
            </div>
            <h3 className="text-1xl capitalize font-semibold mb-[22px]">{subtitle}</h3>
            <h1 className="text-1xl font-bold mb-[22px]">{title}</h1>
        </div>
    );
}

const CardDisplay: React.FC = () => {
    return (
        <>
        <h1 className="uppercase text-center font-bold text-2xl my-5">core values</h1>
        <div className="flex flex-row flex-wrap justify-between p-[12px]">
            {cardItems.map((item, idx) => (
                <Card key={idx} {...item} />
            ))}
        </div>
        </>
    );
}

export default CardDisplay;