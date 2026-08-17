import { Task, TaskEdit } from './Task';

interface Props {
	items: any,
	removeItem: any,
	changeItem: any
};

function TaskList(props: Props) {
	const [tasks, remove, change] = [props.items, props.removeItem, props.changeItem];
	
	return (
		<ul className="todo-list">{
			tasks.map((task: any) => (
				<li className={task.completed ? 'completed' : 'active'} key={task.id}>
					<Task id={task.id} title={task.title} completed={task.completed} created={task.created} removeItem={remove} changeItem={change} />
					<TaskEdit id={task.id} title={task.title} completed={task.completed} created={task.created} removeItem={remove} changeItem={change} />
				</li>
			))
		}</ul>
	);
}

export default TaskList;
