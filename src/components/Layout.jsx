import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"



const Layout = () => {
  return (
    <div>
        <Navbar/>
        <div className="mx-4">
        <Outlet/>
        </div>
        
    </div>
  )
}

export default Layout