import { Icon } from "lucide-react";
import { useLocation } from "react-router-dom";
export default function MenuItem({ icon, text, link }) {
    const Icon = icon;
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(link)
    return (
        <a href={link} className={currentPath===link ?"menuItem active" :"menuItem "}>
                <Icon />
                <span>{text}</span>
        </a>
    );
}
