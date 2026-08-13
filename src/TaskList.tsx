import { Task, TaskEdit } from './Task';

interface Props {
	items: any,
	setItems: any,
	removeItem: any,
	changeItem: any,
	editItem: any,
	finishedItem: any
};

function TaskList(props: Props) {
	const tasks = props.items;
	const change = props.changeItem;
	const remove = props.removeItem;
	const edit = props.editItem;
	const finish = props.finishedItem;
	
	return (
		<ul className="todo-list">{
			tasks.map((task: any) => (
				<li className={task.status} key={task.id}>
					<Task id={task.id} desc={task.desc} change={change} remove={remove} edit={edit} finish={finish} created={task.created} />
					<TaskEdit id={task.id} desc={task.desc} change={change} remove={remove} edit={edit} finish={finish} created={task.created} />
				</li>
			))
		}</ul>
	);
}

export default TaskList;
