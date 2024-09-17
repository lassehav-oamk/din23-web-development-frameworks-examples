import MenuCategory from './Ex61Components/MenuCategory'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import classes from './Ex61RestaurantMenu.module.css'

export default function Ex61RestaurantMenu() {

  const drinks = [{
    name: 'CocaCola',
    price: 2
  },
  {
    name: 'Water',
    price: 1
  },
  {
    name: 'Beer',
    price: 3
  }
  ]

  const mainCourses =[
    {
      name: 'Fried Rice',
      price: 10
    }
  ];

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
        <Route path="/" element={<MenuCategory menuItems={drinks}/>} />
        <Route path="/main-courses" element={<MenuCategory menuItems={mainCourses} />} />
      </Routes>
        
    </BrowserRouter>
  )
}
