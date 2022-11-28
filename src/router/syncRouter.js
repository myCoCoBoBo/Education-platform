import Index from "../views/index/Index"
import Login from "../views/login/Login"
import { AuthRoute } from "./AuthRoute"
import { Navigate } from 'react-router-dom';
const routes=[
    {
        path: '/',
        element: <Navigate to='/index' />
      },
        {
            path:"/index",
            meta: {
                title: '首页',
              },
            element:<AuthRoute>
            <Index/>
          </AuthRoute>,
        },
        {
            path:"/login",
            meta: {
                title: '登录'
              },
            element:<AuthRoute>
            <Login/>
          </AuthRoute>,
        }
    ]
 

  export default routes
 

