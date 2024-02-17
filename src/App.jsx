import './App.css'
import { Routes, Route  } from 'react-router-dom'
import Layout from './components/Layout'
import PostsPage from './Pages/PostsPage'
import CreatePage from './Pages/CreatePage'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} > 
                    <Route path='posts' element={<PostsPage/>}/>
                    <Route path='create' element={<CreatePage/>}/>

                    <Route path='*' element={<h1> не найдена</h1>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App