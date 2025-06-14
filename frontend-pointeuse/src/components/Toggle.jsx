export default function Toggle({status,onChange}) {
    return (
        <label class="switch">
            <input type="checkbox" checked={status} onChange={onChange}/>
            <span class="slider round"></span>
        </label>
    );
};
