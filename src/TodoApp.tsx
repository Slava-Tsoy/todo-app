import { useState } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
	const data = [
		{ userId: 1, id: 1, title: 'Starting the Markup', completed: false, status: 'active'},
		{ userId: 1, id: 2, title: 'Adding Interactivity', completed: true, status: 'active'},
		{ userId: 1, id: 3, title: 'Adding Functionality', completed: true, status: 'active'},
		{ userId: 1, id: 4, title: 'Final Touches', completed: false, status: 'active'}
	];

	const items = data.map(item => {
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

	const changeTask = (id: number, status: string, event?: any) => {
		if (event !== void 0) {
			const checked = event.target.checked;
			const value = event.target.value;
			
			switch (event.type) {
				case 'change':
					setTasks(tasks.map(task => task.id === id ? {...task, completed: checked, status: checked ? status : 'active'} : task));
					break;
				case 'keyup':
					setTasks(tasks.map(task => task.id === id ? {...task, title: value, completed: false, status: status} : task));
					break;
			}			
		} else {
			setTasks(tasks.map(task => task.id === id ? {...task, status: status} : task));
		}
	}

	return (
		<>
			<section className="todoapp">
				<Header items={tasks} newItem={addTask} />
				<section className="main">
					<TaskList items={tasks} setItems={addTask} removeItem={removeTask} changeItem={changeTask} />
					<Footer />
				</section>
			</section>
		</>
	);
}

export default TodoApp;
