import { useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route index element = {<Home/>} />
      <Route path='/:slug' element ={<Detail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
