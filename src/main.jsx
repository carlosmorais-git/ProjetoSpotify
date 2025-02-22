import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// importando o componente - 'componente + arquivo'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
/* <StrictMode> - Utilizado para identificar potenciais problemas no meu projeto,
  ajudando a garantir sua robustez e boas práticas. 
  
  -> Duplica minhas saidas de ações
*/
  <StrictMode>
    <App />
  </StrictMode>,
)
