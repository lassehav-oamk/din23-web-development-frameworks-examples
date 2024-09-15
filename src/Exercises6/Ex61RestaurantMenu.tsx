import React from 'react'
import MenuDrinks from './Ex61Components/MenuDrinks'
import MenuMainCourses from './Ex61Components/MenuMainCourses'
import { BrowserRouter, RouterProvider, Routes, Route, Link } from "react-router-dom";
import classes from './Ex61RestaurantMenu.module.css'



export default function Ex61RestaurantMenu() {

  return (
    <BrowserRouter>
      <div>
          <h1>Restaurant Menu</h1>
          <div className={ classes.menu }>            
              <Link to={`/`}>Drinks</Link>
              <Link to={`/main-courses`}>Main Courses</Link>
          </div>
      </div>
      <Routes>
        <Route path="/" element={<MenuDrinks />} />
        <Route path="/main-courses" element={<MenuMainCourses />} />
      </Routes>
        
    </BrowserRouter>
  )
}
