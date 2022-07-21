import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pg } from '../post/Pg'
import { Sequelize } from '../post/Sequelize'

export const Router = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Sequelize/>}/>
            <Route path='/pg' element={<Pg/>}/>
            <Route path='/sequelize' element={<Sequelize/>}/>
        </Routes>
    
  )
}
