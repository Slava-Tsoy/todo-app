import NewTaskForm from './NewTaskForm';

interface Props {
	items: any,
	setItems: any
};

function Header(props: Props) {
	return (
		<header className="header">
			<h1>todos</h1>
			<NewTaskForm items={props.items} setItems={props.setItems} />
		</header>
	);
}

export default Header;
