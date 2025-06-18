import Layout from "./components/Layout";
import Employe from "./pages/Employe";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="employe" element={<Employe />} />
            </Route>
        </Routes>
    );
}

export default App;
