import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const Home = React.lazy(() => import('./container/home'));


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
