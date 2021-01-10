import { Redirect } from 'react-router-dom';
import './style.css';
function ColorPage({
	match: {
		params: { color },
	},
	history,
	colors,
}) {
	const handleClick = () => {
		history.goBack();
	};

	const colorObj = colors.find((obj) => obj.name === color);
	if (!colorObj) {
		return <Redirect to='/' />;
	}
	return (
		<div
			className='ColorPage-Background'
			style={{ backgroundColor: colorObj.value }}
		>
			<p>This is {color} !!</p>
			<p>Isn't Beautiful ... !</p>
			<button onClick={handleClick}>Go Back</button>
		</div>
	);
}

export default ColorPage;
