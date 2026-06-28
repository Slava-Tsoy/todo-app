import Task from './Task';

function TaskList() {
	return (
		<ul className="todo-list">
			<li className="completed">
				<Task />
				<input type="text" className="edit" value="Editing task" />
			</li>
			<li className="editing">
				<Task />
				<input type="text" className="edit" value="Editing task" />
			</li>
			<li>
				<Task />
				<input type="text" className="edit" value="Editing task" />
			</li>
		</ul>
	);
}

export default TaskList;
