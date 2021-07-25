import "./App.css";

import TaskList from "./Components/TaskList";
function App() {
	return (
		<>
			<nav className="navbar navbar-dark">
				<div className="container">
					<span className="navbar-brand mb-0 h1">Todo List</span>
				</div>
			</nav>

			<div className="container">
				<div className="row">
					<TaskList />
				</div>
			</div>
		</>
	);
}

export default App;
