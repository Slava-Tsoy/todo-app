interface Props {
	description: string,
	created: string
}

export function Task(props: Props) {
	return (
		<div className="view">
			<input className="toggle" type="checkbox" />
			<label>
				<span className="description">{props.description}</span>
				<span className="created">{props.created}</span>
			</label>
			<button className="icon icon-edit"></button>
			<button className="icon icon-destroy"></button>
		</div>
	);
}

export function TaskEdit() {
	return (
		<input type="text" className="edit" value="Editing task" />
	);
}