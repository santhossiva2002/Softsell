import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@/hooks/use-theme";
createRoot(document.getElementById('root')).render(
   <ThemeProvider defaultTheme="light" storageKey="softsell-theme">
    <App />
  </ThemeProvider>
)
