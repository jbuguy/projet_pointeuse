import { Icon } from "lucide-react";
import React from "react";

export default function MenuItem({ icon, text, link }) {
    const Icon = icon;
    return (
        <a href={link} className="menuItem ">
                <Icon />
                <span>{text}</span>
        </a>
    );
}
