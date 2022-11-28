import React from 'react'
import {Outlet} from "react-router-dom"
export default function Index() {
  return (
    <div>
      <Outlet />
      <h1>我是Index组件</h1>
    </div>
  )
}

