import { useState } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
	const  handleLocalStorage = (method: string, key?: any, value?: any) => {
		switch (method) {
			case 'set': {
				value = JSON.stringify(value);
				return localStorage.setItem(key, value);
			};
			case 'get': {
				const data: any = localStorage.getItem(key);
				return JSON.parse(data);
			};
			case 'remove':
				return localStorage.removeItem(key);
			case 'clear':
				return localStorage.clear();
		}
	};

	const dataFormStorage = handleLocalStorage('get', 'TodoAppData');
	
	const data: any = !dataFormStorage ? [
		{ userId: 1, id: 1, title: 'Starting the Markup', completed: false, status: 'active'},
		{ userId: 1, id: 2, title: 'Adding Interactivity', completed: true, status: 'active'},
		{ userId: 1, id: 3, title: 'Adding Functionality', completed: true, status: 'active'},
		{ userId: 1, id: 4, title: 'Final Touches', completed: false, status: 'active'}
	] : dataFormStorage;
	
	const items = data.map((item: any) => {
		item.status = item.completed ? 'completed' : 'active';

		if (!Object.prototype.hasOwnProperty.call(item, 'created')) {
			return {...item, created: new Date()};
		}
		
		return item;
	});

	if (!dataFormStorage) handleLocalStorage('set', 'TodoAppData', items);
	
	const [tasks, setTasks] = useState(items);

	const addTask = (newTask: any) => {
		setTasks((tasks: any) => [...tasks, newTask]);
		handleLocalStorage('set', 'TodoAppData', tasks);
	};

	const removeTask = (id: number) => {
		setTasks(tasks.filter((task: any) => task.id !== id));
		handleLocalStorage('set', 'TodoAppData', tasks);
	};

	const changeTask = (id: number, status: string, event?: any) => {
		const checked = event.target.checked;
		const value = event.target.value;
		
		switch (event.type) {
			case 'change':{
				const changedTasks = tasks.map((task: any) => task.id === id ? {...task, completed: checked, status: checked ? status : 'active'} : task);
				setTasks(changedTasks);
				handleLocalStorage('set', 'TodoAppData', changedTasks);
				break;
			}
			case 'keyup': {
				const editedTasks = tasks.map((task: any) => task.id === id ? {...task, title: value, completed: false, status: status} : task)
				setTasks(editedTasks);
				handleLocalStorage('set', 'TodoAppData', tasks);
				break;
			}
			case 'click': {
				const editTasks = tasks.map((task: any) => task.id === id ? {...task, completed: false, status: status} : task);
				setTasks(editTasks);
				break;
			}
		}
	}

	const filterTasks = (flag: string) => {
		const allTasks = handleLocalStorage('get', 'TodoAppData');
		const activeTasks = allTasks.filter((task: any) => !task.completed);
		const completedTasks = allTasks.filter((task: any) => task.completed);

		switch (flag) {
			case 'Completed':
				setTasks(completedTasks);
				break;
			case 'Active':
				setTasks(activeTasks);
				break;
			case 'All':
				setTasks(allTasks);
				break;
		}
	};

	return (
		<>
			<section className="todoapp">
				<Header items={tasks} newItem={addTask} />
				<section className="main">
					<TaskList items={tasks} setItems={addTask} removeItem={removeTask} changeItem={changeTask} />
					<Footer items={tasks} filterTasks={filterTasks} />
				</section>
			</section>
		</>
	);
}

export default TodoApp;
