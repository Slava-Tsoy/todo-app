interface Props {
	items: any,
	filterTasks: any
};

function TasksFilter(props: Props) {
	const handleClick = (event: any) => {
		const target = event.target as HTMLElement;

		if (target.tagName !== 'BUTTON' || target.className === 'selected') return;
		
		const panel = target.closest('ul.filters');
		const buttons = panel?.querySelectorAll('button');

		buttons?.forEach(elem => elem.className = '');
		target.className = 'selected';

		const value = target.innerText;
		
		props.filterTasks(value);
	};

	return (
		<ul className="filters" onClick={handleClick}>
			<li>
				<button className="selected">All</button>
			</li>
			<li>
				<button>Active</button>
			</li>
			<li>
				<button>Completed</button>
			</li>
		</ul>
	);
}

export default TasksFilter;
