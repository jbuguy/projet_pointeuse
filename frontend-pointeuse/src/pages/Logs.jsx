import { Download, Search, Upload } from "lucide-react";
import { useState } from "react";
import DynamicTable from "../components/DynamicTable";

export default function Logs() {
    const logsData = [
        {
            id: 1,
            type: "ajout",
            date: "2004-01-14 08:00",
            utilisateur: "aziz m1",
            description: "Nouvel enregistrement créé dans le système",
        },
        {
            id: 2,
            type: "modification",
            date: "2004-01-14 10:30",
            utilisateur: "système",
            description: "Mise à jour automatique des paramètres",
        },
        {
            id: 3,
            type: "modification",
            date: "2004-01-14 12:00",
            utilisateur: "aziz m1",
            description: "Correction des informations utilisateur",
        },
        {
            id: 4,
            type: "modification",
            date: "2004-01-14 13:00",
            utilisateur: "aziz m1",
            description: "Ajustement des permissions d'accès",
        },
        {
            id: 5,
            type: "suppression",
            date: "2004-01-14 14:00",
            utilisateur: "aziz m1",
            description: "Suppression d'un élément obsolète",
        },
    ];
    const [searchValue, setSearch] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [filteredLogs, setFilteredLogs] = useState(logsData);
    const logs =filteredLogs.map(log=>
        <tr key={log.id}>
            <td>{log.type}</td>
            <td>{log.date}</td>
            <td>{log.utilisateur}</td>
            <td>{log.description}</td>
        </tr>
    )
    const handleSubmit = (e) => {
        e.preventDefault();

        const filtered = logsData.filter((log) => {
            const matchType = log.type
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            const logDate = new Date(log.date);
            const afterStart = !dateDebut || logDate >= new Date(dateDebut);
            const beforeEnd = !dateFin || logDate <= new Date(dateFin);

            return matchType && afterStart && beforeEnd;
        });

        setFilteredLogs(filtered);
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
            </form>
            <hr />
            <table border={0}>
                <thead>
                    <tr>
                        <th>type</th>
                        <th>date</th>
                        <th>user</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>{logs}</tbody>
            </table>
        </div>
    );
};
