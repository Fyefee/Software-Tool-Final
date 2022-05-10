import {
  Routes, Route
} from 'react-router-dom'
import HomePage from './page/HomePage'
import FormPage from './page/FormPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  
      <Route path="/vaccine/registration" element={<FormPage />} />  
    </Routes>
  )
}

export default App;
