import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import AddEmployee from './components/AddEmployee'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element= {<ListEmployeeComponent />}></Route>
        <Route path='/employees' element= {<ListEmployeeComponent />}></Route>
        <Route path='/addEmployee' element={<AddEmployee />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
