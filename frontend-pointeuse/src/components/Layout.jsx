import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { Bell } from "lucide-react";
export default function Layout() {
    return (
        <>
            <Menu
                user={{
                    img: "/userplaceholder.jpg",
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
