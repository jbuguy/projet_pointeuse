export default function MainItem({icon,head,text}) {
    const Icon=icon;
    return (
        <div className="mainItem">
            <span className="mainIcon">
                <Icon size={28}/>
            </span>
            <div>
                <h3>{head}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};
