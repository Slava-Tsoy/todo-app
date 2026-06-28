import './styles.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function TodoApp() {
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
