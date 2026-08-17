import TasksFilter from './TasksFilter';

interface Props {
	items: any,
	filterTasks: any,
	amountTasks: number,
	clearCompleted: any
};

function Footer(props: Props) {
	const handleClearCompleted = () => {
		props.clearCompleted(props.items);
	};
	
	return (
		<footer className="footer">
			<span className="todo-count">{props.amountTasks} items left</span>
			<TasksFilter filterTasks={props.filterTasks} />
			<button className="clear-completed" onClick={handleClearCompleted}>Clear completed</button>
		</footer>
	);
}

export default Footer;
