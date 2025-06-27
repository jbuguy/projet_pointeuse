import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { Bell, LogIn } from "lucide-react";
import userPlaceholder from "../assets/userplaceholder.jpg";
import LoginPage from "../pages/LoginPage";
export default function Layout() {
    const user = {
        img: userPlaceholder ,
        name: "aziz manager",
        type: "HR Administrator",
    };
    const navigate = useNavigate();
    return (
        <>
            <Menu
                user={user}
            />
            <main>
                <header>
                    <Bell size={24} />
                    <button className="blueButton" onClick={()=> {
                        navigate("/login")
                    }}> log out</button>
                </header>
                <Outlet context={user} />
            </main>
        </>
    );
}
