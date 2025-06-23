import Layout from "./components/Layout";
import Employe from "./pages/Employe";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SuiviHeure from "./pages/SuiviHeure";
import Hierachie from "./pages/Hierachie";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="employe" element={<Employe />} />
                <Route path="suivi_heure" element={<SuiviHeure />} />
                <Route path="hierachie" element={<Hierachie />} />
            </Route>
        </Routes>
    );
}

export default App;
