import React from "react";
import AddList from "./AddList";
import ListItem from "./ListItem";

class TaskList extends React.Component {
	state = {
		lists: [
			{
				id: 1,
				task: "one",
				status: "Pending",
			},
			{
				id: 2,
				task: "two",
				status: "Pending",
			},
			{
				id: 3,
				task: "loremlreomreo",
				status: "Done",
			},
			{
				id: 4,
				task: "four",
				status: "Pending",
			},
			{
				id: 5,
				task: "done task",
				status: "Done",
			},
		],

		filter: "All",
	};

	addList = (newList) => {
		newList.id = this.state.lists.length + 1;
		let listCopy = [...this.state.lists];
		listCopy.push(newList);

		this.setState({
			lists: listCopy,
		});
	};

	markAsDone = (task) => {
		// alert(task.id);
		let done_task = this.state.lists.findIndex((list) => list.id === task.id);

		let listCopy = [...this.state.lists];

		listCopy[done_task].status = "Done";
		this.setState({
			lists: listCopy,
		});
	};

	removeTask = (task) => {
		let newList = this.state.lists.filter((list) => list.id !== task.id);

		this.setState({
			lists: newList,
		});
	};

	changeDisplay = (status) => {
		// alert(status);
		this.setState({ filter: status });
	};

	render() {
		let all_task = this.state.filter === "All" ? this.state.lists : this.state.lists.filter((list) => list.status === this.state.filter);

		return (
			<div className="container mt-5">
				<div className="row">
					<AddList addList={this.addList} />
				</div>

				<div className="row">
					<div className="col-md-12 filter-buttons">
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								this.changeDisplay("All");
							}}>
							All Task
						</button>
						<button
							type="button"
							className="btn btn-warning"
							onClick={() => {
								this.changeDisplay("Pending");
							}}>
							Pending Task
						</button>
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								this.changeDisplay("Done");
							}}>
							Complete Task
						</button>
					</div>
				</div>

				<div className="row mt-3">
					{all_task.map((list) => (
						<ListItem key={list.id} list={list} markAsDone={this.markAsDone} removeTask={this.removeTask} />
					))}
				</div>
			</div>
		);
	}
}

export default TaskList;
