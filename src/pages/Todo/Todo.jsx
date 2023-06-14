import React , {useState , useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function Todo() {
    const [todolist , setTodoList] = useState([])

    const handleOnChangeInput = (todoId)=>{
        console.log(todoId)
    }
    useEffect(() => {
        console.log("hi")
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodoList(json))
      }, []);
      
  return (
    
    <div className='bg-slate-900 h-screen p-10 md:p-12'>
      <Header />
       <div className='mt-20'>
       {todolist.slice(0,6).map((todo)=>{
            return<div className='flex p-4 justify-center' key={todo.id}>
               <p className={`px-2 ${todo.completed ? 'text-red-700 line-through' : 'text-green-500'}`}>{todo.title}</p>
               <input type='checkbox' onChange={() => handleOnChangeInput(todo.id)} />
               </div>
        })}
       </div>
   
    </div>
  )
}

export default Todo