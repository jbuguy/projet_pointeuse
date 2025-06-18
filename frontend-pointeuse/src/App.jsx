import Layout from "./components/Layout";
import Employe from "./pages/Employe";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Routes basename="/projet_pointeuse">
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="employe" element={<Employe />} />
            </Route>
        </Routes>
    );
}

export default App;
