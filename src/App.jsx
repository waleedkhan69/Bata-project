import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./component/Home"
import Navswiper from "./component/Navswiper"

import API from './component/API'
import CatagoriAPI from './component/CatagoriAPI'
import Catagoriswiper from './component/Catagoriswiper'
import ProductLogo from "./component/ProductLogo"
import Details from "./component/Details"
import Signupfrom from "./component/Signupfrom"
import Helpcenter from "./component/Helpcenter"
import Help1 from "./component/Help1"
import Help4Location from "./component/Help4Location"
import CustomerCare from "./component/CustomerCare"
import Benifit from "./component/Benifit"
import ADTOcartproduct from "./component/ADTOcartproduct"



function App() {
  const brose = createBrowserRouter([
    {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <>
          <Navswiper />
          <API />
          <CatagoriAPI />
          <Catagoriswiper />
          <ProductLogo/>
          <Signupfrom/>
          <Helpcenter/>
          {/*  */}
          </>
      },{
        path:"/:id",
        element:<Details/>
      },
      {
        path:"/helpdetails",
        element:<Help1/>,
      },
      {
        path:"/lcate",
        element:<Help4Location/>,
      },
    
      {
        path:"/care",
        element:<  CustomerCare/>,
      },
   
      {
        path:"/benifit",
        element:<Benifit/>,
      },
      
      {
        path:"/adprduct",
        element:<ADTOcartproduct/>,
      }
   
     
    ]
  },{
path:'/login',
element: <h1>login</h1>
  }
])
  return <RouterProvider
    router={brose}
  />


}

export default App
