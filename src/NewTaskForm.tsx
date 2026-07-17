interface Props {
	items: any,
	setItems: any
};

function NewTaskForm(props: Props) {
	const handleKeyUp = (e: any) => {	
		if (e.target.value && e.code === 'Enter') {
			const item = {id: props.items.length + 1, desc: e.target.value};
			props.setItems(item);
			e.target.value = '';
		}
	}

	return (
		<input
			className="new-todo"
			placeholder="What needs to be done?"
			autoFocus
			onKeyUp={handleKeyUp}
		/>
	);
}

export default NewTaskForm;
