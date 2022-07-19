import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Projects from '../pages/Projects'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router