import ProductList from '@/components/ProductList'
import Aboutus from '@/pages/Aboutus'
import Home from '@/pages/Home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <Aboutus />,
  },
  {
    path: '/products',
    element: <ProductList />,
  },
])

export default router
