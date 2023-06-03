import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Meals from './components/Meals/Meals';
import Order from './components/Order/Order';
import Main from './layout/Main';
import Footer from './components/Footer/Footer';

function App() {
  const router=createBrowserRouter([

{path:'/',
   element:<Main></Main>, children:[
  {path:'/', element:<Home></Home>},
  {path:'/home', element:<Home></Home>},
  {
    path:'/meals',
  loader:async()=>{
     return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
  },
   element:<Meals></Meals>
  },
  {path:'/orders', element:<Order></Order>}
  
]},
{path:'/about', element:<About></About>},
{path:'/*', element:<div>This route didn't found</div>},
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
     <Footer ></Footer>
     
    </div>
  );
}

export default App;
