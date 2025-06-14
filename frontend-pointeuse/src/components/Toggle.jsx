export default function Toggle({status,onChange}) {
    return (
        <label className="switch">
            <input type="checkbox" checked={status} onChange={onChange}/>
            <span className="slider round"></span>
        </label>
    );
};
