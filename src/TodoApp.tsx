import { useState } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
	const [count, setCount] = useState(0);

	return (
		<>
			<section class="todoapp">
				<Header />
				<section class="main">
					<TaskList />
					<Footer />
				</section>
			</section>
		</>
	);
}

export default TodoApp;
