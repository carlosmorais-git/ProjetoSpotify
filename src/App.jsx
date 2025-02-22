// Arquivo base - Criacao de 'COMPONENTES'
import 'react'
import Header from "../components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Artists from "../pages/Artists"
import Artist from "../pages/Artist"
import Songs from "../pages/Songs"
import Song from "../pages/Song"

// BrowserRouter => Toda estrutura de rotas precisa esta envolvida por element, é um gerenciador de rotas
// Routes => Conjunto de rotas
// Route => Uma rota expecifica:
//        > path = Caminho da url
//        > element = Qual componente esta vinculado a esse caminho 
//        > :id = Esse parametro no final da URL indica que havera um valor dinamico


const App = () => {
  return (
  <BrowserRouter>
    <Header />

    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/song/:id" element={<Song />} />
    </Routes>
  </BrowserRouter>);

};

// ao exportar eu permito usar esse componente em varios lugares
export default App


