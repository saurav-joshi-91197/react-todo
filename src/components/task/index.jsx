import React, { Component } from 'react';
import './index.css'

const Task = (props) => (
    <div>
        <li className="list-item" style={{ display: "inline-block"}}>
        
                <div className="col-md-4" style={{fontSize: 14}}>
                    Name: {props.value.name}
                </div>
                <div className="col-md-4" style={{fontSize: 14}}>
                    Number: {props.value.number}
                </div>
            
            <button className="col-md-4" onClick={() => props.onDelete(props.id)} className="btn btn-danger delete">Delete</button>

        </li>
        
    </div>
);

export default Task;
