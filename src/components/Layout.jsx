import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'


const Layout = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Outlet />
            </div>
            <footer>
                Султан
            </footer>
        </>
    )
}
export default Layout