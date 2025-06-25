import { useNavigate } from "react-router";

export default function MainItem({icon,head,text,link}) {
    const navigate =useNavigate();
    const Icon=icon;
    return (
        <div className="mainItem" onClick={()=>navigate(link)}>
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
