import { useState } from 'react'
import Nav from './components/nav'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import Rejume from './components/routes/Resume'
import Skill from './components/routes/Skill'
import Project from './components/routes/Project'
import About from './components/routes/About'
import Error from './components/routes/Error'
import Home from './components/routes/Home'

function App() {
  const [count, setCount] = useState(0)
  let routes=createBrowserRouter(createRoutesFromElements(
    <>  
    <Route
    path='/'
    element={<Home/>}
    >
      <Route path='about' element={<About/>}/>
      <Route path='project' element={<Project/>} />
      <Route path='skill' element={<Skill/>}/>
      <Route path='resume' element={<Rejume/>}/>
     <Route path='*' element={<Error/>} />

    </Route>
    </>
  )
   
  )

  return (
    <>
    <RouterProvider router={routes}>
    <Nav/> 
    </RouterProvider>
  
       
    </>
  )
}

export default App
