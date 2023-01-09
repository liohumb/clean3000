import { Route, Routes } from 'react-router-dom'
import Nav from './navigations/nav/Nav'
import Home from './pages/home/Home'

import './assets/styles/Style.scss'

function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route index path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App
