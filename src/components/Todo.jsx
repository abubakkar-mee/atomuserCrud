import React,{useState} from 'react'
import { todoAtom } from '../lib/store'
import { useAtom } from 'jotai'

const Todo = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useAtom(todoAtom);
    const addTodo = () =>{
        setTodos((todos) => [...todos, text]);
        setText('')
    }
  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
        {
            todos.map((todo,index) =>(
                <div key={index}>
                <h2 key ={index}>{todo}</h2>
                </div>
            ))
        }

    </div>
  )
}

export default Todo


