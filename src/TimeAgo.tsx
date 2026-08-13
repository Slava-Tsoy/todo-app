import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface Props {
	date: string
}

function TimeAgo(props: Props) {
	const [timeAgo, setTimeAgo] = useState('');

	useEffect(() => {
		const updateTime = () => {
			setTimeAgo(formatDistanceToNow(props.date, {addSuffix: true}));
		};

		updateTime();

		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, [props.date]);

	return <span className="created">created {timeAgo}</span>;
}

export default TimeAgo;