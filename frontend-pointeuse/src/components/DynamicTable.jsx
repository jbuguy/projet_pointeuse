import { ChevronDown, ChevronUp, Plus, PlusCircle } from "lucide-react";
import { useState, Fragment, useRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

export default function DynamicTable(prop) {
    const [sorting, setSorting] = useState({ field: "id", ascending: false });
    const [values, setValues] = useState(prop.values);
    const [visible, setVisible] = useState([...prop.visible]);
    const [dropDown, setDropDown] = useState(null);
    const availableCols = useMemo(
        () => Object.keys(prop.header).filter((k) => !visible.includes(k)),
        [prop.header, visible]
    );
    const dropDownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target)
            ) {
                setDropDown(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    function removeVisible(key) {
        setVisible((prevVisible) => prevVisible.filter((v) => v != key));
    }
    function insertCol(ele, index) {
        setVisible((prevVisible) => {
            const newVisible = [...prevVisible];
            newVisible.splice(index, 0, ele);
            return newVisible;
        });
    }
    const render = values.map((v) => (
        <tr key={v.id}>
            <td></td>
            {visible.map((k) => (
                <Fragment key={k}>
                    <td>{v[k]}</td>
                    <td></td>
                </Fragment>
            ))}
        </tr>
    ));
    function sort(key) {
        console.log(key);
        if (key === sorting.field) {
            setSorting((prevSorting) => ({
                ...prevSorting,
                ascending: !prevSorting.ascending,
            }));
            setValues((prevValues) => [...prevValues].reverse());
            return;
        }
        setSorting((prevSorting) => ({ ...prevSorting, field: key }));
        setValues((prevValues) =>
            [...prevValues].sort((a, b) => compare(a[key], b[key]))
        );
    }
    function compare(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return sorting.ascending ? a - b : b - a;
        }
        return sorting.ascending
            ? String(a).localeCompare(String(b))
            : String(b).localeCompare(String(a));
    }
    return (
        <table>
            <thead>
                <tr>
                    <th className="cell-plus">
                        <Plus
                            className="plus-table"
                            size={16}
                            onClick={(e) => {
                                if (0 === dropDown?.id) {
                                    setDropDown(null);
                                }
                                const rect =
                                    e.currentTarget.getBoundingClientRect();
                                setDropDown({
                                    id: 0,
                                    position: {
                                        top: rect.bottom + window.scrollY,
                                        left: rect.left + window.scrollX,
                                    },
                                });
                            }}
                        />
                        {dropDown?.id === 0 &&
                            availableCols.length > 0 &&
                            createPortal(
                                <div
                                    className="dropDown"
                                    ref={dropDownRef}
                                    style={{
                                        top: dropDown.position.top,
                                        left: dropDown.position.left,
                                    }}
                                >
                                    {availableCols.map((availableKey) => (
                                        <button
                                            key={availableKey}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                insertCol(availableKey, 0);
                                                if (
                                                    availableCols.length === 1
                                                ) {
                                                    setDropDown(null);
                                                }
                                            }}
                                        >
                                            {availableKey}
                                        </button>
                                    ))}
                                </div>,
                                document.body
                            )}
                    </th>
                    {visible.map((k, i) => (
                        <Fragment key={k}>
                            <th
                                onClick={() => sort(k)}
                                scope="col"
                                className={
                                    sorting.field === k
                                        ? "active-col"
                                        : undefined
                                }
                            >
                                <div className="th-content">
                                    <span>
                                        {prop.header[k] === ""
                                            ? k
                                            : prop.header[k]}
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeVisible(k)}
                                        >
                                            x
                                        </button>
                                    </span>
                                    <span>
                                        {sorting.field === k &&
                                            (sorting.ascending ? (
                                                <ChevronDown
                                                    className="active-text"
                                                    size={20}
                                                />
                                            ) : (
                                                <ChevronUp
                                                    className="active-text"
                                                    size={20}
                                                />
                                            ))}
                                    </span>
                                </div>
                            </th>
                            <th className="cell-plus">
                                <Plus
                                    className="plus-table"
                                    size={16}
                                    onClick={(e) => {
                                        if (i + 1 === dropDown?.id) {
                                            setDropDown(null);
                                        }
                                        const rect =
                                            e.currentTarget.getBoundingClientRect();
                                        setDropDown({
                                            id: i + 1,
                                            position: {
                                                top:
                                                    rect.bottom +
                                                    window.scrollY,
                                                left:
                                                    rect.left + window.scrollX,
                                            },
                                        });
                                    }}
                                />
                                {dropDown?.id === i + 1 &&
                                    availableCols.length > 0 && (
                                        <div
                                            ref={dropDownRef}
                                            style={{
                                                top: dropDown.position.top,
                                                left: dropDown.position.left,
                                            }}
                                            className="dropDown"
                                        >
                                            {availableCols.map(
                                                (availableKey) => (
                                                    <button
                                                        key={availableKey}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            insertCol(
                                                                availableKey,
                                                                i + 1
                                                            );
                                                            if (
                                                                availableCols.length ===
                                                                1
                                                            ) {
                                                                setDropDown(
                                                                    null
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        {availableKey}
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    )}
                            </th>
                        </Fragment>
                    ))}
                </tr>
            </thead>
            <tbody>{render}</tbody>
        </table>
    );
}
