import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './Components/RootLayout/rootLayout'
import ErrorPage from './ErrorPage';
import Home from './Components/Home/home';
import SignIn from './Components/SignIn/signin'
import AboutUs from './Components/AboutUs/aboutUs'
import SignUp from './Components/SignUp/SignUp'
import Features from './Components/AddnF/Features'
import Pricing from './Components/AddnF/Pricing'
import Faqs from './Components/AddnF/Faq'
import UserProfile from './Components/UserProfile/UserProfile'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import Manage from './Components/Manage/Manage'
import ChangePassword from './Components/ChangeCred/ChangePassword'
import ChangeEmail from './Components/ChangeCred/ChangeEmail'
function App() {

  const routerObject=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/sign-up',
          element:<SignUp/>
        },
        {
          path:'/sign-in',
          element:<SignIn/>
        },
        {
          path:'/about-us',
          element:<AboutUs/>
        },
        {
          path:'/features',
          element:<Features/>
        },
        {
          path:'/f-a-q',
          element:<Faqs/>
        },
        {
          path:'/pricing',
          element:<Pricing/>
        },
        {
          path:'/user-profile',
          element:<UserProfile/>,
          children:[
            
            {
              path:'cart',
              element:<Cart/>
            },
            {
              path:'manage-account',
              element:<Manage/>,
              children:[
                {
                  path:'change-password',
                  element:<ChangePassword/>
                },
                {
                  path:'change-mail',
                  element:<ChangeEmail/>
                }
              ]
            }
          ]
        },
        {
          path:'/products',
          element:<Products/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={routerObject}/>
    </div>
  );
}

export default App;
