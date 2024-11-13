import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundry } from './error.boundry.js';

createRoot(document.getElementById("root")).render(
  <ErrorBoundry fallback={<h1>There was an error. Please try again later.</h1>}>
    <App />
  </ErrorBoundry>
);
