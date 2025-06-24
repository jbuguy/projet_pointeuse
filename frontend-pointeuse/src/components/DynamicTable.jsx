import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function DynamicTable(prop) {
    const [sorting, setSorting] = useState({ field: "id", ascending: false });
    const [values, setValues] = useState(prop.values);
    const render = values.map((v) => (
        <tr key={v.id}>
            {Object.keys(prop.header).map((k) => (
                <td key={k}>{v[k]}</td>
            ))}
        </tr>
    ));
    function sort(key) {
        console.log(key)
        if(key===sorting.field){
            setSorting(prevSorting=>({...prevSorting,ascending:!prevSorting.ascending}));
            setValues(prevValues=>[...prevValues].reverse());
            return;
        }
        setSorting(prevSorting=>({...prevSorting,field:key}));
        setValues((prevValues) =>
            [...prevValues].sort((a, b) => compare(a[key], b[key]))
        );

    }
    function compare(a,b) {
        if(typeof a ==="number" && typeof b === "number"){
            return sorting.ascending? a-b : b-a;
        }
        return String(a).localeCompare(String(b));
    }
    return (
        <table>
            <thead>
                <tr>
                    {Object.entries(prop.header).map(([k, v]) => (
                        <th key={k} onClick={()=>sort(k)}>
                            <div className="th-content">
                                <span>{v === "" ? k : v}</span>
                                <span>
                                    {sorting.field === k &&
                                        (sorting.ascending ? (
                                            <ChevronDown />
                                        ) : (
                                            <ChevronUp />
                                        ))}
                                </span>
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{render}</tbody>
        </table>
    );
}
