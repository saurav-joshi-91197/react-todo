import React, { Component } from 'react';
import Task from '../task';

class Tasklist extends Component {
    constructor()
    {
        super();

        this.state = {
            input: '',
            list: [{id: 1, value:"sample item 1"},
             {id: 2, value:"sample item 2"}]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let newList = this.state.list;
        newList.push({id: this.state.list.length+1, value: this.state.input});
        this.setState({
            input: '',
            list: newList
        });
    }

    handleDelete = (id) => {
        let newList = this.state.list.filter(item => (item.id !== id));
        this.setState({
            list: newList
        });
    }

    render()
    {
        return (
            <div className="App">
                <div className="App-header">
                    <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.input} onChange={this.handleChange}/>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
                {this.state.list.map(item => (<Task id={item.id} key={item.id} value={item.value} onDelete={this.handleDelete}/>))}
            </div>
        );
    }
}

export default Tasklist;