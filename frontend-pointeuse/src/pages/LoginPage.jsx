import { useNavigate } from "react-router";

export default function LoginPage() {
    const navigate=useNavigate();
    return (
        <div className="login">
            <h2>Authentication</h2>
            <form action="">
                <div className="field">
                    <label htmlFor="username">Nom d'utilisateur :</label>
                    <input
                        type="username"
                        name="username"
                        id="username"
                        placeholder="Entrez votre nom d'utilisateur"
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">password :</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Entrez votre mot de passe"
                    />
                </div>
                <div className="field">
                    <label htmlFor="codeCle">code cle :</label>
                    <input
                        type="number"
                        name="codeCle"
                        id="codeCle"
                        placeholder="Entrez votre code clé"
                    />
                </div>
                <div className="field">
                    <label htmlFor="societe">societe :</label>
                    <input
                        type="text"
                        name="societe"
                        id="societe"
                        placeholder="Entrez le nom de votre société"
                    />
                </div>
                {/* TODO: change the on click function to call a login function  */}
                <button className="blueButton" onClick={()=>navigate("/")}>valider</button>
            </form>
        </div>
    );
};
