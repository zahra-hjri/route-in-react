import React , {useState , useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { todo } from '../../api/todo'
import './Todo.css'


function Todo() {
  const [todolist , setTodoList] = useState([])

  const handleOnChangeInput = (todoId)=>{
    const findTodo = todolist.find((mainTodo)=>{
      return todoId === mainTodo.id;
    })
    if(findTodo.completed){
      const falsyTodo = (findTodo.completed = false)
      setTodoList([...todolist ,falsyTodo])
    }else{
      const trueTodo = (findTodo.completed = true)
      setTodoList([...todolist ,trueTodo])

    }
  }
  useEffect(() => {
     todo(setTodoList)

      }, []);
    
  

  return (
    
    <div className='todoMain h-full p-10 md:p-12'>
      <Header />
       <div className='mt-20 '>
       {todolist.slice(0,9).map((todo)=>{
            return<div className='flex p-4 justify-center font-bold' key={todo.id}>
               <p className={`px-2 ${todo.completed ? 'text-red-700 line-through' : 'text-green-800'}`}>{todo.title}</p>
               <input type='checkbox' checked={todo.completed ? true : false} onChange={() => handleOnChangeInput(todo.id)} />
               </div>
        })}
       </div>
       <div className='imgTest w-96 h-96'></div>
   <Footer />
    </div>
  )
}

export default Todo