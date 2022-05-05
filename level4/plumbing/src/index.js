import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { PlumbingContextProvider} from './plumbingContextProvider';
const container = document.getElementById('root');
const root = createRoot(container);





root.render(
<PlumbingContextProvider>
<App />
</PlumbingContextProvider>
);

