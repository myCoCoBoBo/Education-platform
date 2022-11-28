import React, { lazy, Suspense } from 'react'

export default function LazyLoad(path) {
  const Element = lazy(() => import(`./${path}`))
  return (
    <Suspense>
      <Element />
    </Suspense>
  )
}

