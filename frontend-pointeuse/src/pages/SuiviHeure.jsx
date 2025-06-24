import { Download, Search, Upload } from "lucide-react";
import { useState } from "react";
import Logs from "./Logs";
import Suivi from "./Suivi";

export default function SuiviHeure() {
    const [currentTab, setCurrentTab] = useState("suivi");

    return (
        <div className="suiviHeure">
            <div className="tabs">
                <div
                    className={`tab ${currentTab === "logs" && "tab-active"}`}
                    onClick={() => setCurrentTab("logs")}
                >
                    logs
                </div>
                <div
                    className={`tab ${currentTab === "suivi" && "tab-active"}`}
                    onClick={() => setCurrentTab("suivi")}
                >
                    Suivi d'Heures
                </div>
            </div>
            {currentTab === "logs" ? (
                <Logs />
            ) : (
                currentTab === "suivi" && <Suivi />
            )}
        </div>
    );
}
