import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import './style/style.scss';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(  
    <App />
)
