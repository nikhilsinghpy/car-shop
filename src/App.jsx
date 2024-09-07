import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/DashBoard/Dashboard'
import { Header } from './pages/Header/Header'
import { Footer } from './pages/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App