import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { RouterProvider } from 'react-router'
import Login from './page/Login'
import { lazy, Suspense } from 'react'
import ProtectedRoute from './navigation/ProtectedRoute'

const Home = lazy(() => import('./page/Home'))
const Aboutus = lazy(() => import('./page/Aboutus'))
const ProductList = lazy(() => import('./components/ProductList'))

const Loader = () => <h2>Loading...</h2>

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<Loader />}>
        <Aboutus />
      </Suspense>
    ),
  },
  {
    path: '/products',
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loader />}>
          <ProductList />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])

function App() {
  return (
    <div className='p-5 m-2'>
      <RouterProvider router={browserRouter} />
    </div>
  )
}

export default App
