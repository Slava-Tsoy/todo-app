interface Props {
	id: number,
	desc: string,
	created: string
	change: any,
	remove: any,
	edit: any,
	finish: any
}

export function Task(props: Props) {
	const handleRemove = () => {
		props.remove(props.id);
	};

	const handleEdit = () => {
		props.change(props.id, 'editing');
	};

	const handleChange = (e: any) => {
		props.finish(props.id, 'completed', e.target.checked);
	};

	return (
		<div className="view">
			<input className="toggle" type="checkbox" onChange={handleChange} />
			<label>
				<span className="description">{props.desc}</span>
				<span className="created">{props.created}</span>
			</label>
			<button className="icon icon-edit" onClick={handleEdit}></button>
			<button className="icon icon-destroy" onClick={handleRemove}></button>
		</div>
	);
}

export function TaskEdit(props: Props) {
	const handleKeyUp = (e: any) => {
		if (e.target.value && e.key === 'Enter') {
			props.edit(props.id, e.target.value, 'active');
			
			const checkBox = e.target.previousElementSibling.querySelector('.toggle');
			
			if (checkBox.checked) checkBox.checked = false;
		}
	};
	
	return (
		<input type="text" className="edit" defaultValue={props.desc} onKeyUp={handleKeyUp} />
	);
}