import { Task, TaskEdit } from './Task';
import { format } from 'date-fns';

interface Props {
	items: any,
	setItems: any
};

function TaskList(props: Props) {
	const created_now = 'created ' + format(new Date(), 'yyyy-MM-dd HH:mm:ss');
	const tasks = props.items;
	const change = props.setItems;
	
	return (
		<ul className="todo-list">{
			tasks.map((task: any) => (
				<li className={task.status}>
					<Task desc={task.desc} change={change} created={created_now} />
					<TaskEdit desc={task.desc} change={change} created={created_now} />
				</li>
			))
		}</ul>
	);
}

export default TaskList;
