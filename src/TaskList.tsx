import { Task, TaskEdit } from './Task';

interface Props {
	items: any,
	setItems: any,
	removeItem: any,
	changeItem: any
};

function TaskList(props: Props) {
	const tasks = props.items;
	const remove = props.removeItem;
	const change = props.changeItem;
	
	return (
		<ul className="todo-list">{
			tasks.map((task: any) => (
				<li className={task.completed ? 'completed' : task.status} key={task.id}>
					<Task id={task.id} title={task.title} completed={task.completed} remove={remove} change={change} created={task.created} />
					<TaskEdit id={task.id} title={task.title} completed={task.completed} remove={remove} change={change} created={task.created} />
				</li>
			))
		}</ul>
	);
}

export default TaskList;
