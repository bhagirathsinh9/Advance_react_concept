import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { RouterProvider } from 'react-router'
import Login from './pages/Login'
import { lazy, Suspense } from 'react'
import ProtectedRoute from './navigation/ProtectedRoute'

const Home = lazy(() => import('./pages/Home'))
const Aboutus = lazy(() => import('./pages/Aboutus'))
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
    <div className='' >
      <RouterProvider router={browserRouter} />
    </div>
  )
}

export default App
