import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

import './assets/styles/Style.scss'

function App() {
    return (
        <>
            <Routes>
                <Route index path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App
