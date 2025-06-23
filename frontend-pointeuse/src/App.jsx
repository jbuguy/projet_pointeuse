import Layout from "./components/Layout";
import Employe from "./pages/Employe";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SuiviHeure from "./pages/SuiviHeure";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="employe" element={<Employe />} />
                <Route path="suivi_heure" element={<SuiviHeure />} />
            </Route>
        </Routes>
    );
}

export default App;
