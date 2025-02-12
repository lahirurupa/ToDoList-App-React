import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Create React App", "Create To-Do List"]);
    const [newTask, setNewTask] = useState("");

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t =>[...t, newTask]);
            setNewTask("");
        }else{
            alert("Please enter a task");
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }else{
            alert(`Task "${tasks[index]}" is already at the top`);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }else{
            alert(`Task "${tasks[index]}" is already at the bottom`);
        }
    }

    return (
        <div className='To-Do-List'>
            <h1>To-Do List</h1>
            
            <div className='Add-Task'>
                <input type="text" placeholder="Add a task" value={newTask} onChange={handleChange}/>
                <button onClick={addTask}>Add</button>
            </div>
            

            <ul className='Task-List'>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='moveUp-button' onClick={() => moveTaskUp(index)}>👆</button>
                        <button className='moveDown-button' onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ToDoList;
