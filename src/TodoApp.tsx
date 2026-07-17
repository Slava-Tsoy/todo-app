import { useState } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
	const items = [
		{ id: 1, desc: 'Starting the Markup'},
		{ id: 2, desc: 'Adding Interactivity'},
		{ id: 3, desc: 'Adding Functionality'},
		{ id: 4, desc: 'Final Touches'}
	];
	
	const [tasks, setTasks] = useState(items);

	const addTask = (newTask: { id: number; desc: string; }) => {
		setTasks(tasks => [...tasks, newTask]);
		console.log(tasks);
	};

	return (
		<>
			<section className="todoapp">
				<Header items={tasks} setItems={addTask} />
				<section className="main">
					<TaskList items={tasks} setItems={addTask} />
					<Footer />
				</section>
			</section>
		</>
	);
}

export default TodoApp;
