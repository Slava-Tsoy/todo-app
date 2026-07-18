import { useState } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
	const items = [
		{ id: 1, desc: 'Starting the Markup', status: 'active'},
		{ id: 2, desc: 'Adding Interactivity', status: 'active'},
		{ id: 3, desc: 'Adding Functionality', status: 'active'},
		{ id: 4, desc: 'Final Touches', status: 'active'}
	];
	
	const [tasks, setTasks] = useState(items);

	const addTask = (newTask: { id: number; desc: string; status: string }) => {
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
