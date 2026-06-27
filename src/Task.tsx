function Task() {
	return (
		<div class="view">
			<input class="toggle" type="checkbox" />
			<label>
				<span class="description">Active task</span>
				<span class="created">created 5 minutes ago</span>
			</label>
			<button class="icon icon-edit"></button>
			<button class="icon icon-destroy"></button>
		</div>
	);
}

export default Task;
