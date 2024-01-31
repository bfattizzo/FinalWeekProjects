import 'bootstrap/dist/css/bootstrap.min.css'
import MainSearch from '../src/components/MainSearch.jsx'
import CompanySearchResults from './components/CompanySearchResults.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourites from './components/Favourites.jsx'
import store from '../src/redux/store/store.jsx'
import './App.css'
import { Provider } from 'react-redux'

function App() {


  return (

    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
