import Nav from './component/Nav/Nav';
import Vinyl from './component/Vinyl/Vinyl';
import AdmDiscos from './component/admin/admDiscos';

import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />

                <Routes>
                    <Route path="/" element={<Vinyl />}/>
                    <Route path="admin" element={<AdmDiscos />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;