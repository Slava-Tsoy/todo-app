import { useState, useEffect } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
	const innerData = [
		{ userId: 1, id: 1, title: 'Starting the Markup', completed: false},
		{ userId: 1, id: 2, title: 'Adding Interactivity', completed: true},
		{ userId: 1, id: 3, title: 'Adding Functionality', completed: true},
		{ userId: 1, id: 4, title: 'Final Touches', completed: false}
	];
	
	const items = innerData.map((item: any) => {
		if (!Object.prototype.hasOwnProperty.call(item, 'created')) {
			return {...item, created: new Date()};
		}
		return item;
	});
	
	const [tasks, setTasks] = useState(items);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then((res: Response) => res.json())
		.then((data: any) => {
			setTasks(data.map((item: any) => {
				if (!Object.prototype.hasOwnProperty.call(item, 'created')) {
					return {...item, created: new Date()};
				}
				return item;
			}));
			setLoading(false);
		})
		.catch((error) => {
			console.error(error);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<section className="todoapp">
				<header className="header">
					<h1>Loading...</h1>
				</header>
			</section>
		);
	}

	const addTask = (newTask: any) => {
		setTasks((tasks: any) => [...tasks, newTask]);
	};

	const removeTask = (id: number) => {
		const removedTasks = tasks.filter((task: any) => task.id !== id);
		setTasks(removedTasks);
	};

	const changeTask = (id: number, event: any) => {
		const [checked, value, type] = [event.target.checked, event.target.value, event.type]
		
		switch (type) {
			case 'change':{
				const changedTasks = tasks.map((task: any) => task.id === id ? {...task, completed: checked} : task);
				setTasks(changedTasks);
				break;
			}
			case 'keyup': {
				const editedTasks = tasks.map((task: any) => task.id === id ? {...task, title: value, completed: false} : task)
				setTasks(editedTasks);
				filterTasks('All');
				break;
			}
		}
	}

	const filterTasks = (flag?: string) => {
		const list = document.querySelector('ul.todo-list');
		const [active, completed] = [list?.querySelectorAll('li.active'), list?.querySelectorAll('li.completed')]
		const filterTabs = document.querySelector('ul.filters')?.querySelectorAll('button');

		switch (flag) {
			case 'Completed':
				completed?.forEach((li) => li.className = 'completed');
				active?.forEach((li) => li.className = 'active hidden');
				break;
			case 'Active':
				completed?.forEach((li) => li.className = 'completed hidden');
				active?.forEach((li) => li.className = 'active');
				break;
			default:
				completed?.forEach((li) => li.className = 'completed');
				active?.forEach((li) => li.className = 'active');
				filterTabs?.forEach((tab, index) => tab.className = index === 0 ? 'selected' : '');
		}
	};

	const counterTasks = (things: any) => {
		return things.filter((thing: any) => !thing.completed).length;
	};

	const clearCompleted = (things: any) => {
		setTasks(things.filter((thing: any) => !thing.completed));
		filterTasks('All');
	};

	return (
		<>
			<section className="todoapp">
				<Header items={tasks} newItem={addTask} />
				<section className="main">
					<TaskList items={tasks} removeItem={removeTask} changeItem={changeTask} />
					<Footer items={tasks} filterTasks={filterTasks} amountTasks={counterTasks(tasks)} clearCompleted={clearCompleted} />
				</section>
			</section>
		</>
	);
}

export default TodoApp;
