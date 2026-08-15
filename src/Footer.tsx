import TasksFilter from './TasksFilter';

interface Props {
	items: any,
	filterTasks: any
};

function Footer(props: Props) {
	return (
		<footer className="footer">
			<span className="todo-count">1 items left</span>
			<TasksFilter items={props.items} filterTasks={props.filterTasks} />
			<button className="clear-completed">Clear completed</button>
		</footer>
	);
}

export default Footer;
