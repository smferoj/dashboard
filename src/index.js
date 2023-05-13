import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const App = lazy(()=>import("./App.jsx"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Suspense fallback= 'loading.....'>
   <App />
   </Suspense>

   </BrowserRouter>
  

);


