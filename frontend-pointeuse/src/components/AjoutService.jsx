import { PlusCircle, X } from "lucide-react";
import { useState } from "react";
import DropDown from "./DropDown";
import Toggle from "./Toggle";

export default function AjoutService({ onSubmit }) {
    const machineData = [
        { id: 1, label: "test1", status: false },
        { id: 2, label: "test2", status: false },
        { id: 3, label: "test3", status: false },
        { id: 4, label: "test4", status: false },
        { id: 5, label: "test5", status: false },
        { id: 6, label: "test6", status: false },
        { id: 7, label: "test7", status: false },
        { id: 8, label: "test8", status: false },
        { id: 9, label: "test9", status: false },
        { id: 10, label: "test10", status: false },
        { id: 11, label: "test11", status: false },
    ];
    const ScheduleData = [
        { id: 1, name: "Schedule1" },
        { id: 2, name: "Schedule2" },
        { id: 3, name: "Schedule3" },
        { id: 4, name: "Schedule4" },
        { id: 5, name: "Schedule5" }
    ];
    const [ajoutService, setAjoutService] = useState([1]);
    const serviceRender = ScheduleData.map((s) => (
        <option key={s.id}>{s.name} </option>
    ));
    const [selected, setSelected] = useState(machineData);
    // function checkAll(e) {
    //     const checked = e.target.checked;
    //     console.log(checked);
    //     setSelected((prevSelected) =>
    //         prevSelected.map((s) => ({ ...s, status: checked }))
    //     );
    // }
    const renderInputs = ajoutService.map((v) => (
        <tr key={v}>
            <td>
                <select name="service" id="service">
                    {serviceRender}
                </select>
            </td>
            <td>
                <input type="date" name="" id="" />
            </td>
            <td>
                <input type="date" name="" id="" />
            </td>
            <td>
                <button className="square-btn bg-red" onClick={(e)=>removeService(e,v)}>
                    <X size={20} />
                </button>
            </td>
        </tr>
    ));
    function removeService(e,id){
        e.preventDefault();
        if (ajoutService.length<=1) {
            return;
        }
        setAjoutService(prevAjout => prevAjout.filter(v => v!=id));
    }
    function handleChange(id) {
        setSelected((prevSelected) =>
            prevSelected.map((s) =>
                s.id === id ? { ...s, status: !s.status } : s
            )
        );
    }
    function addService(e){
        e.preventDefault();
        const id=ajoutService[ajoutService.length-1];
        setAjoutService(prevAjout =>[...prevAjout,id+1]);
    }

    return (
        <>
            <h2>Ajouter </h2>
            <hr />
            <form action={onSubmit}>
                <fieldset className="fieldset-info-personel">
                    <h3 className="custom legend">info de service</h3>
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="id">id:</label>
                            <input type="text" disabled name="id" id="id" value="001" />
                        </div>
                        <div className="field">
                            <label htmlFor="designation">Designation*:</label>
                            <input type="text" name="designation" id="designation" />
                        </div>
                    </div>
                    <div>
                        <div className="field">
                            <label htmlFor="name">name*:</label>
                            <input name="name" id="name" type="text"/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <h3 className="custom legend">Paramètres</h3>
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="tdc">tolerance de calcul:</label>
                            <input type="number" name="tdc" id="tdc" />
                        </div>
                        <div className="field">
                            <label htmlFor="dlc">duree limite de calcul de hs:</label>
                            <input type="number" name="dlc" id="dlc" />
                        </div>
                        
                        <div className="field">
                            <label htmlFor="point">liste machine*:</label>
                            <DropDown
                                values={selected}
                                handleChange={handleChange}
                                name="machine"
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <h3 className="custom legend">information de emploi</h3>
                    <div className="fields">
                        <div className="field label-toggle ">
                            <label htmlFor="">actif*:</label>
                            <Toggle />
                        </div>
                        <div className="field label-toggle">
                            <label htmlFor="">soumis H.S:</label>
                            <Toggle />
                        </div>
                        <div className="field span-two">
                            <label htmlFor="service">service*:</label>
                            <table className="grid-service">
                                <tr>
                                    <th>service</th>
                                    <th>date debut</th>
                                    <th>date fin</th>
                                    <th></th>
                                </tr>
                                {renderInputs}
                            </table>
                            <div className="field">
                                <button
                                    className="blueButton no-bg"
                                    onClick={addService}
                                >
                                    <PlusCircle size={20} /> ajouter un autre
                                    service
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="span-two">
                    <div className="col">
                        <button type="submit" className="blueButton no-bg">
                            <PlusCircle size={20} /> ajouter un autre
                        </button>
                        <button type="submit" className="blueButton">
                            enregistrer
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
