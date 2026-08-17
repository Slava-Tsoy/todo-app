import NewTaskForm from './NewTaskForm';

interface Props {
	items: any,
	newItem: any
};

function Header(props: Props) {
	return (
		<header className="header">
			<h1>todos</h1>
			<NewTaskForm items={props.items} newItem={props.newItem} />
		</header>
	);
}

export default Header;
