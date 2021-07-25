import { useState } from "react";

const AddList = (props) => {
	const [task, setTask] = useState("");

	const inputChangeHandler = (e) => {
		setTask(e.target.value);
	};

	const addNewItem = () => {
		let newList = {
			task: task,
			status: "Pending",
		};

		props.addList(newList);
		setTask("");
	};

	return (
		<div className="col-md-6 offset-md-3">
			<h2>Add Task Form</h2>
			<div className="form-group">
				<input type="text" className="form-control" placeholder="Task" value={task} name="task" onChange={inputChangeHandler} />
			</div>

			<button type="button" onClick={addNewItem} className="btn btn-add float-right">
				Add Item
			</button>
		</div>
	);
};

// class AddList extends React.Component {
// 	state = {
// 		task: "",
// 	};

// 	inputChangeHandler = (e) => {
// 		this.setState({
// 			[e.target.name]: e.target.value,
// 			// variable
// 			//hindi string
// 		});
// 	};

// 	addNewItem = () => {
// 		// this.props.addItem("test");

// 		let newList = {
// 			task: this.state.task,
// 			status: "Pending",
// 		};

// 		this.props.addList(newList);
// 		this.setState({
// 			task: "",
// 		});
// 	};
// 	render() {
// 		return (
// 			<div className="col-md-6 offset-md-3">
// 				<h2>Add Task Form</h2>
// 				<div className="form-group">
// 					<input
// 						type="text"
// 						className="form-control"
// 						placeholder="Task"
// 						value={this.state.task}
// 						name="task"
// 						onChange={this.inputChangeHandler}
// 					/>
// 				</div>

// 				<button type="button" className="btn btn-add float-right" onClick={this.addNewItem}>
// 					Add Item
// 				</button>
// 			</div>
// 		);
// 	}
// }

export default AddList;
