import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
)
