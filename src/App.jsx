import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './components/Products'
import CartPage from './components/CartPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Products />
        },
        {
          path: '/cart',
          element: <CartPage/>
        }
      ]
    },
  
  ])
 

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    </>
  )
}

export default App
