import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";
import Signup from "./pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/account" element={<Chart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
