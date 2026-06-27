import Task from './Task';

function TaskList() {
	return (
		<ul class="todo-list">
			<li class="completed">
				<Task />
				<input type="text" class="edit" value="Editing task" />
			</li>
			<li class="editing">
				<Task />
				<input type="text" class="edit" value="Editing task" />
			</li>
			<li>
				<Task />
				<input type="text" class="edit" value="Editing task" />
			</li>
		</ul>
	);
}

export default TaskList;
