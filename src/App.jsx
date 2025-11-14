import { useState } from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import Rejume from './components/routes/Resume'
import Skill from './components/routes/Skill'
import Project from './components/routes/Project'
import About from './components/routes/About'
import Error from './components/routes/Error'
import Home from './components/routes/Home'
import Layout from './components/routes/Layout'
import  {Contact}  from './components/routes/Contact'


function App() {
  const [count, setCount] = useState(0)
  let routes=createBrowserRouter(createRoutesFromElements(
    <>  
    <Route
    path='/'
    element={<Layout/>}
    >
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='project' element={<Project/>} />
      <Route path='contact' element={<Contact/>} />
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
    <Layout/>
    </RouterProvider>
  
       
    </>
  )
}

export default App
