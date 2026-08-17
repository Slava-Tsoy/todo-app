import TasksFilter from './TasksFilter';

interface Props {
	items: any,
	filterTasks: any,
	amountTasks: any
};

function Footer(props: Props) {
	return (
		<footer className="footer">
			<span className="todo-count">{props.amountTasks} items left</span>
			<TasksFilter items={props.items} filterTasks={props.filterTasks} />
			<button className="clear-completed">Clear completed</button>
		</footer>
	);
}

export default Footer;
