import TimeAgo from './TimeAgo';

interface Props {
	id: number,
	title: string,
	completed: boolean,
	created: any,
	removeItem: any,
	changeItem: any
}

export function Task(props: Props) {
	const handleRemove = () => {
		props.removeItem(props.id);
	};

	const handleChange = (event: any) => {
		switch (event.type) {
			case 'change':
				props.changeItem(props.id, event);
				break;
			case 'click':
				event.target.closest('li').className = 'editing';
				break;
		}
	};

	return (
		<div className="view">
			<input className="toggle" type="checkbox" checked={props.completed} onChange={handleChange} />
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
		const [target, value, key] = [event.target, event.target.value, event.key];
		
		if (value && key === 'Enter') {
			const parent = target.closest('li');
			const checkBox = parent.querySelector('.toggle');
			
			if (checkBox.checked) {
				checkBox.checked = false;
			}

			parent.className = 'active';
			props.changeItem(props.id, event);
		}
	};
	
	return (
		<input type="text" className="edit" defaultValue={props.title} onKeyUp={handleKeyUp} />
	);
}