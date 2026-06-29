import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Inicio from './Inicio'
import Instalacion from './Instalacion'
import ActiveDirectory from './ActiveDirectory'
import Cliente from './Cliente'
import ServiciosRed from './ServiciosRed'
import Gpo from './Gpo'
import Prompts from './Prompts'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/instalacion" element={<Instalacion />} />
            <Route path="/active-directory" element={<ActiveDirectory />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/servicios-red" element={<ServiciosRed />} />
            <Route path="/gpo" element={<Gpo />} />
            <Route path="/prompts" element={<Prompts />} />
            <Route path="*" element={<Inicio />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
