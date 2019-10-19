import React, { Component } from 'react';
import './CopyTodo.css'

class CopyTodo extends Component {
	constructor(props){
		super(props)
		this.state={
			items:'',
			TaskList:[]
		}
	}
	onChangeHandler(onChangeInput){
		var CatchInputValue = onChangeInput.target.value
		this.setState({
			items:CatchInputValue

		});
	}
	AddTask(addInput){
		var TaskValue = this.state.items;
		var TaskListVariable = this.state.TaskList;
		TaskListVariable.push(TaskValue)
		this.setState({
			TaskList:TaskListVariable
		});
	}
	delete(deleteInputParameter){
		var findUniqueId = deleteInputParameter.target.id
		var dTasklist = this.state.TaskList;
		dTasklist.splice(findUniqueId,1)
		this.setState({
			TaskList:dTasklist
		});


	}
	render() {
		// dateTime
		const d = new Date();
		const Dates = d.getDate();
		const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		const DayName = days[d.getDay()]
		const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		const MounthName = months[d.getMonth()];
		const Year = d.getFullYear();
		
		const {items,TaskList}= this.state;
		const ullilist = this.state.TaskList.map((x,i)=>
			<li key={i}>{x} <span id={i} onClick={this.delete.bind(this)}>x</span></li>
			)
		return (
			<div className="todoContainer">
				<div className="dateTime">
					<h1>{Dates} 
					<p>{MounthName} {Year}</p> 
					</h1>
					<h4>{DayName}</h4>
				</div>
				<input type="text" placeholder="Enter Task" value={items} onChange={this.onChangeHandler.bind(this)}/>
				<button onClick={this.AddTask.bind(this)}>+</button>
				<ul>
					{ullilist}
				</ul>
				
				
			</div>
		);
	}
}

export default CopyTodo;