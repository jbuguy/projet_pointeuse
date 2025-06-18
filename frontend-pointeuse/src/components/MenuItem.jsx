import { Icon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export default function MenuItem({ icon, text, link }) {
    const Icon = icon;
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <Link to={link} className={currentPath===link ?"menuItem active" :"menuItem "}>
                <Icon />
                <span>{text}</span>
        </Link>
    );
}
