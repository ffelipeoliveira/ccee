import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import WebRoutes from './routes';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <WebRoutes/>
  </BrowserRouter>
)
