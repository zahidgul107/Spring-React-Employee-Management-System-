import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import AddEmployee from './components/AddEmployee'
import ListDepartment from './components/ListDepartment'
import AddDepartment from './components/AddDepartment'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element= {<ListEmployeeComponent />}></Route>
        <Route path='/employees' element= {<ListEmployeeComponent />}></Route>
        <Route path='/addEmployee' element={<AddEmployee />}></Route>
        <Route path='/updateEmployee/:id' element={<AddEmployee />}></Route>
        <Route path='/departments' element={<ListDepartment />}></Route>
        <Route path='/addDepartment' element={<AddDepartment/>}></Route>
        <Route path='/updateDepartment/:id' element={<AddDepartment />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
