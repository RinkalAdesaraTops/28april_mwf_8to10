import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import CounterComponent from './CounterComponent'
import StateExample from './StateExample'
import LifecycleClass from './LifecycleClass'
import LIfecycleFunction from './LIfecycleFunction'
import UserCrudComponent from './UserCrudComponent'
import EmpCrudComponent from './EmpCrudComponent'
import ApiCrudExample from './ApiCrudExample'
import RevisionApiCRUD from './RevisionApiCRUD'
import Menu from './Menu'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'

function App() {
  let name="Test"
  let age=25
  return (
    <>
      <p>Project created in Vite</p>
      <Menu />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/contact" element={<LifecycleClass />} />
        <Route path="/about" element={<LIfecycleFunction />} />
      </Routes>
      {/* </BrowserRouter> */}
      {/* <CounterComponent myname={name} myage={age} count={10} /> */}
      {/* <StateExample /> */}
      {/* <LifecycleClass mysalary="25000"/> */}
      {/* <LIfecycleFunction /> */}
      {/* <UserCrudComponent /> */}
      {/* <EmpCrudComponent /> */}
      {/* <ApiCrudExample /> */}
      {/* <RevisionApiCRUD /> */}
    </>
  )
}

export default App
