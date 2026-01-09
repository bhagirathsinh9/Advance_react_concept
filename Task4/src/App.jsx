import './App.css'
import { RouterProvider } from 'react-router'
import router from './navigation/router'

function App() {
  return (
    <div className='p-5 m-2'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
