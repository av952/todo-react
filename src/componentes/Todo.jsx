import { useState } from "react"

export default function Todo({item,onUpdate,onDelete }){
    const [isEdit,setIsEdit]=useState(false)
    const [newValue,setNewValue]=useState(item.title)

    function FormEdit() {

        function handleSubmit(e) {
            e.preventDefault()

        }
        
        function handleChange(e) {
            const value = e.target.value
            console.log(e.target); 
            setNewValue((e)=>value)
            
        }

        function handleUpdate() {
            onUpdate(item.id,newValue)  
            setIsEdit(false)
        }

        return(
            <form className="todo-update-form" action="" onSubmit={handleSubmit}>
                <input type='text' className="todo-input" onChange={handleChange} autoFocus value={newValue}/>
                <button className="boton-todo" onClick={handleUpdate} >Update</button>
            </form>
        )
    }

    function TodoElement() {
        return(
            <div className="todo-info">
            <span className="todo-title">{item.title}</span> 
            <button className="boton-todo" onClick={()=>setIsEdit(true)} >Edit</button>
            <button className="boton-todo delete" onClick={(e)=> onDelete(item.id) } >Delete</button>
            </div>
        )
    }

    return(
        <div className="todo">
        {isEdit? <FormEdit/>: <TodoElement/> }

        </div>
    )

        
}
