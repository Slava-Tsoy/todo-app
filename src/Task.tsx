interface Props {
	desc: string,
	created: string
	change: any
}

export function Task(props: Props) {
	return (
		<div className="view">
			<input className="toggle" type="checkbox" />
			<label>
				<span className="description">{props.desc}</span>
				<span className="created">{props.created}</span>
			</label>
			<button className="icon icon-edit"></button>
			<button className="icon icon-destroy"></button>
		</div>
	);
}

export function TaskEdit(props: Props) {
	const handleKeyUp = (e: any) => {
		console.log(props, e);
	};
	return (
		<input type="text" className="edit" value="Editing task" onKeyUp={handleKeyUp} />
	);
}