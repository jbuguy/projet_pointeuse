import userPlaceholder from "../assets/userplaceholder.jpg";
export default function DisplayUser({ user }) {
    return (
        <div className="user">
            <img src={userPlaceholder} alt="user icon " />

            <div className="text">
                <h3>{user.name}</h3>
                <p>{user.type}</p>
            </div>
        </div>
    );
}
