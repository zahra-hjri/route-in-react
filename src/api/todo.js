/**************Start first way fech then ****************/
// export const todo = (setTodoList)=>{
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(json => setTodoList(json))


// }
/************** End first way fech then ****************/
/**************Start second way async awaite fetch ****************/
// export const todo = async(setTodoList) =>{
//     const response =  fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await response.json();
//     setTodoList(data)
// }
/**************End second way async awaite fetch ****************/

/**************handle error ****************/
export const todo = async(setTodoList) =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        setTodoList(data)
    }catch(err){
        console.log(err)
    }
  
}

