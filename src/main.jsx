import ReactDOM from 'react-dom/client';
import App from './app/index';
import './index.css';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);
