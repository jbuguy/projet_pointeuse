import { Download, Pen, Plus, Search, X } from "lucide-react";
import { useState } from "react";

export default function Machine() {
    const [searchValue, setSearch] = useState("");
    const machineData = [
        {
            code: "001",
            libelle: "Central Office",
            address: "192.168.1.10",
            site: "Site A",
            filiale: "Group X",
            etat: "Active",
        },
        {
            code: "002",
            libelle: "Branch Office",
            address: "192.168.1.20",
            site: "Site B",
            filiale: "Group Y",
            etat: "Inactive",
        },
        {
            code: "003",
            libelle: "Remote Office",
            address: "192.168.1.30",
            site: "Site C",
            filiale: "Group Z",
            etat: "Active",
        },
    ];
    const [machines, setMachines] = useState(machineData);
    function searchChange(e) {
        const value = e.target.value;
        setSearch(value);
    }
    const machinesRender = machines.map((machine) => (
        <tr key={machine.code}>
            <td>{machine.code}</td>
            <td>{machine.libelle}</td>
            <td>{machine.address}</td>
            <td>{machine.site}</td>
            <td>{machine.filiale}</td>
            <td>{machine.etat}</td>
            <td className="btn-action">
                <button className="square-btn bg-blue">
                    <Download size={20} />
                </button>
                <button className="square-btn bg-green">
                    <Pen size={20} />
                </button>
                <button
                    className="square-btn bg-red"
                    onClick={() => removeMachine(machine.code)}
                >
                    <X size={20} />
                </button>
            </td>
        </tr>
    ));
    function removeMachine(code) {
        setMachines((prevMachine) => prevMachine.filter((m) => m.code != code));
    }
    return (
        <div className="mainContent">
            <div className="main-head">
                <h1>Machines</h1>
                <div className="buttons">
                    <button className="blueButton">
                        <Plus size={20} />
                        ajouter
                    </button>
                    <button className="blueButton">
                        <Download size={20} />
                        telecharger tout
                    </button>
                </div>
            </div>
            <form className="search">
                <div className="searchContainer">
                    <Search size={20} />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="rechercher"
                        value={searchValue}
                        onChange={searchChange}
                    />
                </div>
            </form>
            <hr />
            <table border={0}>
                <thead>
                    <tr>
                        <th>code</th>
                        <th>libelle</th>
                        <th>Address</th>
                        <th>Site</th>
                        <th>filiale</th>
                        <th>etat</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>{machinesRender}</tbody>
            </table>
        </div>
    );
}
