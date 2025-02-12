import React, { useState } from 'react';

function ToDoList() {
    return (
        <div className='To-Do-List'>
            <h1>To-Do List</h1>
            
            <input type="text" placeholder="Add a task" />
            <button>Add</button>

            <ul>
                <li>
                    Task 1
                    <button>Delete</button>
                    <button>👆</button>
                    <button>👇</button>
                </li>
                <li>
                    Task 2
                    <button>Delete</button>
                    <button>👆</button>
                    <button>👇</button>
                </li>
                <li>
                    Task 3
                    <button>Delete</button>
                    <button>👆</button>
                    <button>👇</button>
                </li>
            </ul>
        </div>
    )
}

export default ToDoList;
