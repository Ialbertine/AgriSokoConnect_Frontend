import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>

            </Route>
          </Routes>
        </Router>
    </>
  )
}

export default App