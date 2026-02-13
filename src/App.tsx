import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Overview from './pages/Overview'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
