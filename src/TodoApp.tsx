// import { useState } from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<section className="todoapp">
				<Header />
				<section className="main">
					<TaskList />
					<Footer />
				</section>
			</section>
		</>
	);
}

export default TodoApp;
