import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { Bell } from "lucide-react";
import userPlaceholder from "../assets/userplaceholder.jpg";
export default function Layout() {
    return (
        <>
            <Menu
                user={{
                    img: {userPlaceholder},
                    name: "aziz manager",
                    type: "HR Administrator",
                }}
            />
            <main>
                <header>
                    <Bell size={24} />
                    <button className="blueButton"> log out</button>
                </header>
                <Outlet />
            </main>
        </>
    );
}
