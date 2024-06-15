import { useState } from 'react'
import { countAtom } from './lib/store'
import { todoAtom } from './lib/store'
import { useAtom } from 'jotai'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Demo from './components/Demo'
import User from './components/User'
import Post from './components/Post'
import Users from './components/Users'
import TotalUser from './components/TotalUser'

function App() {
  const [count, setCount]  = useAtom(countAtom);
  const [todos, setTodos] = useAtom(todoAtom)
  return (
    <>
      <div className='container'>
      {/* <Todo /> */}
      {/* <Demo />
      <User /> */}
      {/* <Post /> */}
      <TotalUser />
      <Users />
      </div>
    </>
  )
}

export default App
