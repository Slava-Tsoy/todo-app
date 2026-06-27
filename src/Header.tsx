import NewTaskForm from "./NewTaskForm";

function Header() {
	return (
		<header class="header">
			<h1>todos</h1>
			<NewTaskForm />
		</header>
	);
};

export default Header;