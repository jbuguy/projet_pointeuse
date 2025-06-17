import { useEffect, useRef, useState } from "react";

export default function DropDown({ values, handleChange, name}) {
    const [open, setOpen] = useState(false);
    const machineRender = values.map((m) => (
        <label key={m.id} htmlFor={m.id}>
            <input
                type="checkbox"
                name={name}
                id={m.id}
                checked={m.status}
                onChange={() => handleChange(m.id)}
            />
            {m.label}
        </label>
    ));
    const ref =useRef(null);
    const filterSelected = values.filter((v) => v.status);
    useEffect(() => {
        function handleClickOutside(event) {
            if (open && ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref,open]);
    return (
        <div className="multiselect" ref={ref}>
            <span onClick={() => setOpen(!open)} id="anchor">
                {filterSelected.length === 0
                    ? "Sélectionnez une machine"
                    : filterSelected.map((s) => s.label).join(", ")}
            </span>
            {open && (
                <ul className="items">
                    {/* <li>
                                        <input
                                            type="checkbox"
                                            name="machine"
                                            onClick={checkAll}
                                        />tous
                                    </li> */}
                    {machineRender}
                </ul>
            )}
        </div>
    );
}
