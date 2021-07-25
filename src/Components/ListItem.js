import React from "react";

class ListItem extends React.Component {
	render() {
		let { id, task } = this.props.list;
		return (
			<>
				<div className="col-md-4">
					<div className="item">
						<p>{task}</p>
					</div>
				</div>
			</>
		);
	}
}

export default ListItem;
