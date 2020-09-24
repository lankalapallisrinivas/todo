import React, { Component } from 'react';
import Todolist from './Todolist';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            text : ""
        }
    }
    changeHandler = (event) => {
        this.setState ({
            text: event.target.value
        })
    }
    onSubitHandler = (event) => {
        event.preventDefault();

        if(this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text : this.state.text,
            id : Date.now()
        }
        this.setState((state) => ({
            items : state.items.concat(newItem),
            text : ""
        }))
    }
    onDeleteHandler = (item) =>
    {
       const newItem =  this.state.items.filter(itm => itm.id !== item.id );
       this.setState({
           items : newItem
       })

    }
    
    render(){
        return(
            <React.Fragment>
                <div className="row">
                <div className="col-md-8 mx-auto">
                <div className="card m-5">
                    <div className="card-body">
                        <h6 className="text-muted card-title">Todo</h6>
                { this.state.items.length === 0 ? null : 
                <Todolist items={this.state.items} onDelete={this.onDeleteHandler}/>
                }
                <form onSubmit={this.onSubitHandler}>
                    <div className="from-group">
                        <label>Enter todo list</label>
                        <input type="text" className="form-control mt-1" value={this.state.text} onChange={this.changeHandler} />
                        {
                            this.state.text.length === 0 ?
                            <button className="btn btn-primary mt-2" disabled>Sumbit {this.state.items.length}</button>
                                :
                             <button className="btn btn-primary mt-2">Sumbit {this.state.items.length}</button>
                        }
                        
                    </div>
                </form>
                    </div>
                </div>


                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Todo;