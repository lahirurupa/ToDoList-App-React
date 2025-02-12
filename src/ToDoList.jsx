import React, { useState } from 'react';

function ToDoList() {
    return (
        <div className='To-Do-List'>
            <h1>To-Do List</h1>
            
            <div className='Add-Task'>
                <input type="text" placeholder="Add a task" />
                <button>Add</button>
            </div>
            

            <ul className='Task-List'>
                <li>
                    <span className='text'>Breakfast</span>
                    <button className='delete-button'>Delete</button>
                    <button className='moveUp-button'>👆</button>
                    <button className='moveDown-button'>👇</button>
                </li>
                <li>
                    <span className='text'>Task 1</span>
                    <button className='delete-button'>Delete</button>
                    <button className='moveUp-button'>👆</button>
                    <button className='moveDown-button'>👇</button>
                </li>
                <li>
                    <span className='text'>Task 1</span>
                    <button className='delete-button'>Delete</button>
                    <button className='moveUp-button'>👆</button>
                    <button className='moveDown-button'>👇</button>
                </li>
            </ul>
        </div>
    )
}

export default ToDoList;
