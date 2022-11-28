
import { Navigate, useRoutes } from 'react-router-dom'
import routes from './syncRouter'
// 渲染路由
const renderRoutes = (routes) => {
  return routes.map((item) => {
    const route = { meta: item.meta, path: item.path }
    if (item.component) {
      // element 要接收react.element类型 item.component 是对象 所以要转一下
      route.element = <item.component />
    }
    if (item.children) {
      route.children = renderRoutes(item.children)
    }
    if (item.redirect) {
      route.element = <Navigate to={item.redirect} />
    }
    return route
  })
}

export default function Router () {
  // useRoutes API 把路由数组整合为 <Router> <Route path="xx" element="xxx"></Route>等 </Router>的路由组件  直接用于BrowserRouter中
  console.log(renderRoutes(routes))
  return useRoutes(renderRoutes(routes))
}

