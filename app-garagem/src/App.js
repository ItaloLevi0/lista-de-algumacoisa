import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import DetalhesVeiculo from "./pages/DetalhesVeiculo";
import ListarVeiculos from "./pages/ListarVeiculos";
import AddVeiculo from "./pages/AddVeiculo";
import Navbar from "./components/Navbar";

export default function App() {
  return (
   <div>

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/listar" element={<ListarVeiculos/>}/>
        <Route path="/novo" element={<AddVeiculo/>}/>
        <Route path="/detalhes" element={<DetalhesVeiculo/>}/>
      </Routes>
    </BrowserRouter>
   </div>

  );
}
  
