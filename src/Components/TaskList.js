import React from "react";
import AddList from "./AddList";
import ListItem from "./ListItem";

class TaskList extends React.Component {
	state = {
		lists: [
			{
				id: 1,
				task: "one",
			},
			{
				id: 2,
				task: "twp",
			},
			{
				id: 3,
				task: "loremlreomreo",
			},
			{
				id: 4,
				task: "111111111",
			},
		],
	};

	addList = (newList) => {
		newList.id = this.state.lists.length + 1;
		let listCopy = [...this.state.lists];
		listCopy.push(newList);

		this.setState({
			lists: listCopy,
		});
	};

	render() {
		return (
			<div className="container mt-5">
				<div className="row">
					<AddList addList={this.addList} />
				</div>

				<div className="row mt-3">
					{this.state.lists.map((list) => (
						<ListItem key={list.id} list={list} />
					))}
				</div>
			</div>
		);
	}
}

export default TaskList;
