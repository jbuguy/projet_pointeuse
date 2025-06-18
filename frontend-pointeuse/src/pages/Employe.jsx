import { Download, Pen, Plus, Search, Text, X } from "lucide-react";
import Toggle from "../components/Toggle";
import { useState } from "react";
import Modal from "../components/Modal";
import AjoutEmploye from "../components/AjoutEmploye";

export default function Employe() {
    const [searchValue, setSearch] = useState("");
    const [ajoutModal,setAjoutModal]=useState(false);
    const [employesData, setEmployes] = useState([
        { nom: "Kristin Watson", service: "Service A", status: true },
        { nom: "Darlene Robertson", service: "Service B", status: false },
        { nom: "Ronald Richards", service: "Service C", status: true },
        { nom: "Cameron Williamson", service: "Service A", status: false },
        { nom: "Eleanor Pena", service: "Service B", status: true },
        { nom: "Courtney Henry", service: "Service C", status: true },
        { nom: "Theresa Webb", service: "Service A", status: false },
        { nom: "Floyd Miles", service: "Service B", status: true },
        { nom: "Bessie Cooper", service: "Service C", status: false },
        { nom: "Wade Warren", service: "Service A", status: true },
    ]);
    const filteredEmployees = employesData.filter((e) =>
        e.nom.toLowerCase().includes(searchValue.toLowerCase())
    );
    const employes = filteredEmployees.map((e) => (
        <tr key={e.nom}>
            <td>{e.nom}</td>
            <td>{e.service}</td>
            <td>
                <Toggle
                    status={e.status}
                    onChange={() => changeStatus(e.nom)}
                />
            </td>
            <td className="btn-action">
                <button className="square-btn bg-blue">
                    <Text size={20} />
                </button>
                <button className="square-btn bg-green">
                    <Pen size={20} />
                </button>
                <button
                    className="square-btn bg-red"
                    onClick={() => removeEmploye(e.nom)}
                >
                    <X size={20} />
                </button>
            </td>
        </tr>
    ));
    function changeStatus(nom) {
        setEmployes((prevEmployes) =>
            prevEmployes.map((e) =>
                e.nom === nom ? { ...e, status: !e.status } : e
            )
        );
    }
    function removeEmploye(nom) {
        setEmployes((prevEmployes) => prevEmployes.filter((e) => e.nom != nom));
    }
    function searchChange(e) {
        const value = e.target.value;
        setSearch(value);
    }
    return (
        <div className="mainContent">
            <div className="main-head">
                <h1>Gestion des Employés</h1>
                <div className="buttons">
                    <button
                        className="blueButton"
                        onClick={() =>  setAjoutModal(true)}
                    >
                        <Plus size={20} />
                        ajouter
                    </button>
                    <Modal isOpen={ajoutModal} onClose={()=>setAjoutModal(false)} >
                        <AjoutEmploye/>
                    </Modal>
                    <button className="blueButton">
                        <Download size={20} />
                        importer
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
                        <th>nom</th>
                        <th>service</th>
                        <th>active</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>{employes}</tbody>
            </table>
        </div>
    );
}
