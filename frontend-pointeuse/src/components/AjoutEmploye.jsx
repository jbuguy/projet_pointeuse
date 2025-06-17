import { PlusCircle } from "lucide-react";
import  {  useState } from "react";
import DropDown from "./DropDown";

export default function AjoutEmploye({ onSubmit }) {
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
    const [selected, setSelected] = useState(machineData);
    // function checkAll(e) {
    //     const checked = e.target.checked;
    //     console.log(checked);
    //     setSelected((prevSelected) =>
    //         prevSelected.map((s) => ({ ...s, status: checked }))
    //     );
    // }
    function handleChange(id) {
        setSelected((prevSelected) =>
            prevSelected.map((s) =>
                s.id === id ? { ...s, status: !s.status } : s
            )
        );
    }
    
    return (
        <div>
            <h3>Ajouter </h3>
            <hr />
            <form action={onSubmit}>
                <fieldset className="fieldset-info-personel">
                    <legend>info personel</legend>
                    <label htmlFor="nom ">
                        nom*:
                        <input type="text" name="nom" id="nom" />
                    </label>
                    <label htmlFor="fname">
                        prenom*:
                        <input type="text" name="fname" id="fname" />
                    </label>
                    <label htmlFor="sexe">
                        sexe:
                        <select name="sexe" id="sexe">
                            <option value="famme">femme</option>
                            <option value="male">male</option>
                        </select>
                    </label>
                    <label htmlFor="tel">
                        numero tel:
                        <input type="tel" name="tel" id="tel" />
                    </label>
                    <label htmlFor="mail">
                        mail*:
                        <input type="email" name="email" id="email" />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>info de pointage</legend>
                    <label htmlFor="point" >
                        liste machine*:
                        <DropDown
                            values={selected}
                            handleChange={handleChange}
                            name="machine"
                        />
                    </label>
                </fieldset>
                <button type="submit">
                    <PlusCircle size={20} /> ajouter un autre
                </button>
                <button type="submit"> ajouter</button>
            </form>
        </div>
    );
}
