import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Redirect(props) {
  const navigate = useNavigate()
  useEffect(() => {
    // replace: true 代表的是要替换掉之前的页面
    navigate(props.to, { replace: true })
  })
  return null
}

