// Main App Imports
import { createRoot } from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'

// Main Components
import App from './App.tsx'

// CSS
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
