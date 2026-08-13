import { useState } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
	let items = [
		{ userId: 1, id: 1, title: 'Starting the Markup', desc: 'Starting the Markup', status: 'active', completed: false},
		{ userId: 1, id: 2, title: 'Adding Interactivity', desc: 'Adding Interactivity', status: 'active', completed: false},
		{ userId: 1, id: 3, title: 'Adding Functionality', desc: 'Adding Functionality', status: 'active', completed: false},
		{ userId: 1, id: 4, title: 'Final Touches', desc: 'Final Touches', status: 'active', completed: false}
	];

	items = items.map(item => {
		if (!Object.prototype.hasOwnProperty.call(item, 'created')) {
			return {...item, created: new Date()};
		}
		return item;
	});
	
	const [tasks, setTasks] = useState(items);

	const addTask = (newTask: any) => {
		setTasks(tasks => [...tasks, newTask]);
	};

	const removeTask = (id: number) => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	const changeTask = (id: number, status: string) => {
		setTasks(tasks.map(task => task.id === id ? {...task, status: status} : task));
	};

	const editTask = (id: number, desc: string, status: string) => {
		setTasks(tasks.map(task => task.id === id ? {...task, desc: desc, status: status} : task));
	};

	const finishedTask = (id: number, status: string, checked: boolean) => {
		setTasks(tasks.map(task => task.id === id ? {...task, status: checked ? status : 'active'} : task));
	};

	return (
		<>
			<section className="todoapp">
				<Header items={tasks} setItems={addTask} />
				<section className="main">
					<TaskList items={tasks} setItems={addTask} removeItem={removeTask} changeItem={changeTask} editItem={editTask} finishedItem={finishedTask} />
					<Footer />
				</section>
			</section>
		</>
	);
}

export default TodoApp;
