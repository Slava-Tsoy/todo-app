import TimeAgo from './TimeAgo';

interface Props {
	id: number,
	title: string,
	created: any,
	remove: any,
	change: any
}

export function Task(props: Props) {
	const handleRemove = () => {
		props.remove(props.id);
	};

	// const handleEdit = (event: any) => {
	// 	props.change(props.id, 'editing', event);
	// };

	const handleChange = (event: any) => {
		switch (event.type) {
			case 'change':
				props.change(props.id, 'completed', event);
				break;
			case 'click':
				props.change(props.id, 'editing');
				break;
		}
	};

	return (
		<div className="view">
			<input className="toggle" type="checkbox" onChange={handleChange} />
			<label>
				<span className="description">{props.title}</span>
				<TimeAgo date={props.created} />
			</label>
			<button className="icon icon-edit" onClick={handleChange}></button>
			<button className="icon icon-destroy" onClick={handleRemove}></button>
		</div>
	);
}

export function TaskEdit(props: Props) {
	const handleKeyUp = (event: any) => {
		if (event.target.value && event.key === 'Enter') {
			props.change(props.id, 'active', event);
			
			const checkBox = event.target.previousElementSibling.querySelector('.toggle');
			
			if (checkBox.checked) checkBox.checked = false;
		}
	};
	
	return (
		<input type="text" className="edit" defaultValue={props.title} onKeyUp={handleKeyUp} />
	);
}