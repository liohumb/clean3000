import { Route, Routes } from 'react-router-dom'
import Nav from './navigations/nav/Nav'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Show from './pages/show/Show'

import './assets/styles/Style.scss'


function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/avis-de-passage" element={<Show/>}/>
                <Route path="/creer" element={<Create/>}/>
                <Route index path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App
