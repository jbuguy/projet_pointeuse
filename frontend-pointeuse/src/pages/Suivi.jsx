import { Download, Search, Upload } from "lucide-react";
import { useState } from "react";
import DynamicTable from "../components/DynamicTable";


export default function Suivi() {
    const attendanceData = [
        {
            id: 0,
            date: "14/01/2004",
            nomEtPrenom: "aziz m1",
            heureEntreeSeance: "8:00:00",
            heureSortieSeance: "10:00:00",
            heureEntreePointage: "8:20:05",
            heureSortiePointage: "10:02:02",
            hPlan: "",
            dureeTotale: "5:45",
            hNor:" 5:45",
            total: "5:45",
        },
        {
            id: 1,
            date: "14/01/2004",
            nomEtPrenom: "aziz m1",
            heureEntreeSeance: "8:00:00",
            heureSortieSeance: "10:00:00",
            heureEntreePointage: "8:04:05",
            heureSortiePointage: "10:02:02",
            hPlan: "",
            dureeTotale: "5:45",
            hNor: "5:45",
            total: "5:45",
        },
        {
            id: 2,
            date: "14/01/2004",
            nomEtPrenom: "aziz m1",
            heureEntreeSeance: "8:00:00",
            heureSortieSeance: "10:00:00",
            heureEntreePointage: "8:04:05",
            heureSortiePointage: "10:02:02",
            hPlan: "",
            dureeTotale: "5:45",
            hNor: "5:45",
            total: "5:45",
        },
        {
            id: 3,
            date: "14/01/2004",
            nomEtPrenom: "aziz m1",
            heureEntreeSeance: "8:00:00",
            heureSortieSeance: "10:00:00",
            heureEntreePointage: "8:04:05",
            heureSortiePointage: "10:02:02",
            hPlan: "",
            dureeTotale: "5:45",
            hNor: "5:45",
            total: "5:45",
        },
        {
            id: 4,
            date: "14/01/2004",
            nomEtPrenom: "aziz m1",
            heureEntreeSeance: "8:00:00",
            heureSortieSeance: "10:00:00",
            heureEntreePointage: "8:04:05",
            heureSortiePointage: "10:02:02",
            hPlan: "",
            dureeTotale: "5:45",
            hNor: "5:45",
            total: "5:45",
        },
        {
            id: 5,
            date: "14/01/2004",
            nomEtPrenom: "aziz m1",
            heureEntreeSeance: "8:00:00",
            heureSortieSeance: "10:00:00",
            heureEntreePointage: "8:04:05",
            heureSortiePointage: "10:02:02",
            hPlan: "",
            dureeTotale: "5:45",
            hNor: "5:45",
            total: "5:45",
        }
    ];
    const [searchValue, setSearch] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="mainSuivi">
            <div className="buttons">
                <button className="blueButton">
                    <Upload /> exporter
                </button>
                <button className="blueButton blue-white">
                    <Download /> importer
                </button>
            </div>
            <form className="search" onSubmit={handleSubmit}>
                <div className="searchContainer">
                    <Search size={20} />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="rechercher"
                        value={searchValue}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <label htmlFor="dateDebut">
                    date debut:
                    <input
                        type="datetime-local"
                        name="dateDebut"
                        id="dateDebut"
                        value={dateDebut}
                        onChange={(e) => setDateDebut(e.target.value)}
                    />
                </label>
                <label htmlFor="dateFin">
                    date fin:
                    <input
                        type="datetime-local"
                        name="dateFin"
                        id="dateFin"
                        value={dateFin}
                        onChange={(e) => setDateFin(e.target.value)}
                    />
                </label>
                <button className="blueButton" type="submit">
                    filtrer
                </button>
                <button
                    className="blueButton blue-white hover-red"
                    type="reset"
                >
                    clear
                </button>
            </form>
            <hr />
            <div className="table-container">
                <DynamicTable
                    header={{
                        id: "code pointeuse",
                        date: "",
                        nomEtPrenom: "",
                        heureEntreeSeance: "",
                        heureSortieSeance: "",
                        heureEntreePointage: "",
                        heureSortiePointage: "",
                        hPlan: "",
                        dureeTotale: "",
                        hNor: "",
                        total: "",
                    }}
                    values={attendanceData}
                    visible={[
                        "id",
                        "date",
                        "nomEtPrenom",
                        "heureEntreeSeance",
                        "heureSortieSeance",
                        "heureEntreePointage",
                        "heureSortiePointage",
                    ]}
                />
            </div>
        </div>
    );
}
