import { Task, TaskEdit } from './Task';
import { format } from 'date-fns';

function TaskList() {
	const created_now = 'created ' + format(new Date(), 'yyyy-MM-dd HH:mm:ss');
	
	return (
		<ul className="todo-list">
			<li className="completed">
				<Task description='Completed task' created={created_now} />
				<TaskEdit />
			</li>
			<li className="editing">
				<Task description='Active task' created={created_now} />
				<TaskEdit />
			</li>
			<li>
				<Task description='Active task' created={created_now} />
				<TaskEdit />
			</li>
		</ul>
	);
}

export default TaskList;
