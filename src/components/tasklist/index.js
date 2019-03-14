import React, { Component } from 'react';
import Task from '../task';

class Tasklist extends Component {
    constructor()
    {
        super();

        this.state = {
            inputName: '',
            inputNo: '',
            list: []
        };

    }

    handleChangeName = (event)=> {
        this.setState({inputName: event.target.value});
    }

    handleChangeNo = (event)=> {
        this.setState({inputNo: event.target.value});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        let newList = this.state.list;
        newList.push({number: this.state.inputNo, name: this.state.inputName});
        this.setState({
            inputName: '',
            inputNo:'',
            list: newList
        });
    }

    handleDelete = (id) => {
        let newList = this.state.list.filter(item => (item.number !== id));
        this.setState({
            list: newList
        });
    }

    // componentDidMount = (props) => {
    //     console.log(props.match.params);
    // }

    render()
    {
        return (
            <div className="App">
                <div className="App-header">
                    <form onSubmit={this.handleSubmit}>
                    <label style={{color: "white"}}>Name: </label>
                        <input type="text" style={{color: "black"}} value={this.state.input} onChange={this.handleChangeName}/><br />
                    <label style={{color: "white"}}>Phone: </label>
                        <input type="text" style={{color: "black"}} value={this.state.input} onChange={this.handleChangeNo}/><br />
                    <input type="submit" value="Submit" />
                    </form>
                </div>

                <ul>
                {this.state.list.map(item => (<Task id={item.number} key={item.number} value={item} onDelete={this.handleDelete}/>))}
                </ul>
            </div>
        );
    }
}

export default Tasklist;