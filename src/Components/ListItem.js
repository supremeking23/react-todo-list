import { useState } from "react";

const ListItem = (props) => {
	const done = (list) => {
		props.markAsDone(list);
	};

	const remove = (list) => {
		props.removeTask(list);
	};

	let { task, status } = props.list;
	let button = "";
	if (status === "Pending") {
		button = (
			<button
				className="order-1 btn btn-success"
				onClick={() => {
					done(props.list);
				}}>
				<i class="material-icons">done</i>
			</button>
		);
	} else if (status === "Done") {
		button = (
			<button
				className="order-1 btn btn-danger"
				onClick={() => {
					remove(props.list);
				}}>
				X
			</button>
		);
	} else {
		button = "";
	}
	return (
		<>
			<div className="col-md-4">
				<div className={`item d-flex justify-content-between align-items-start ${status === "Pending" ? "pending-task" : "done-task"}`}>
					{button}
					<p className="order-0">{task}</p>
				</div>
			</div>
		</>
	);
};

// class ListItem extends React.Component {
// 	done(list) {
// 		this.props.markAsDone(list);
// 	}

// 	remove(list) {
// 		this.props.removeTask(list);
// 	}

// 	render() {
// 		let { task, status } = this.props.list;
// 		let button = "";
// 		if (status === "Pending") {
// 			button = (
// 				<button
// 					className="order-1 btn btn-success"
// 					onClick={() => {
// 						this.done(this.props.list);
// 					}}>
// 					<i class="material-icons">done</i>
// 				</button>
// 			);
// 		} else if (status === "Done") {
// 			button = (
// 				<button
// 					className="order-1 btn btn-danger"
// 					onClick={() => {
// 						this.remove(this.props.list);
// 					}}>
// 					X
// 				</button>
// 			);
// 		} else {
// 			button = "";
// 		}
// 		return (
// 			<>
// 				<div className="col-md-4">
// 					<div className={`item d-flex justify-content-between align-items-start ${status === "Pending" ? "pending-task" : "done-task"}`}>
// 						{button}
// 						<p className="order-0">{task}</p>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }

export default ListItem;
