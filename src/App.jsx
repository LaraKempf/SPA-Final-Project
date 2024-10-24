
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'


import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'

import { Layout } from './Layout'
import { TaskProvider } from './contexts/TaskContext'
import { TaskManager } from './components/TaskManager'

import { MyGoals } from './Pages/MyGoals'

function App() {


  return (
    <>
      <ThemeProvider>
        <TaskProvider>
          <RouterProvider router={router} >
            <TaskManager />
            <MyGoals />
            <Layout />
          </RouterProvider >
        </TaskProvider>
      </ThemeProvider>

    </>
  )
}

export default App
