interface Props {
	items: any,
	newItem: any
};

function NewTaskForm(props: Props) {
	const handleKeyUp = (e: any) => {
		if (e.target.value && e.key === 'Enter') {
			const maxId = props.items.reduce((max: number, obj: any) => obj.id > max ? obj.id : max, 0);
			const item = {
				id: maxId + 1,
				title: e.target.value,
				created: new Date(),
				completed: false
			};
			
			e.target.value = '';
			props.newItem(item);
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
