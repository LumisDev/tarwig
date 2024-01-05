import { createRoot } from 'react-dom/client';
import App from './App';
import './main.css';

createRoot(document.getElementById('root')).render(
     <div className='bg-gradient-to-t from-pink-800 to-slate-500 w-screen h-screen'>
          <App />
     </div>
);
