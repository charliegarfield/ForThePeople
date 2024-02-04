import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepresentativesPage from './RepresentativesPage';
import Homepage from './Homepage';
import Budd from "./Budd";

export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/representatives" element={<RepresentativesPage/>} />
                <Route path="/representatives/budd" element={<Budd/>} />
            </Routes>
        </Router>
    );
}