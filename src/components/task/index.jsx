import React, { Component } from 'react';
import './index.css'

const Task = (props) => (
    <div>
        <li className="list-item">
            {props.value}
            <button onClick={() => props.onDelete(props.id)} className="btn btn-danger delete">Delete</button>
        </li>
        
    </div>
);

export default Task;
