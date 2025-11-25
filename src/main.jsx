import { createRoot } from 'react-dom/client'
import { StoreProvider } from "./hooks/useGlobalReducer.jsx"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes.jsx"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StoreProvider>
)
