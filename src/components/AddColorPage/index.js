import React, { Component } from 'react';
import { BlockPicker } from 'react-color';
import './style.css';
class AddColorPage extends Component {
	state = {
		colorName: '',
		colorValue: '',
	};

	handleColorName = (e) => {
		this.setState({ colorName: e.target.value });
	};
	handleColorValue = (e) => {
		this.setState({ colorValue: e.hex });
	};

	render() {
		return (
			<>
				<form
					className='add-color-page-form'
					onSubmit={(event) => {
						event.preventDefault();
						this.props.changeColor(
							event.target[0].value,
							event.target[1].value
						);
						return this.props.history.push('/colors');
					}}
				>
					<div className='add-color-page-color-name'>
						<label htmlFor='color-name'>Color Name</label>
						<input
							type='text'
							name='color-name'
							id='color-name'
							value={this.state.colorName}
							onChange={this.handleColorName}
						/>
					</div>
					<div className='add-color-page-block-picker'>
						<BlockPicker
							color={this.state.colorValue}
							onChange={this.handleColorValue}
						/>
					</div>
					<input type='submit' value='Add Color' />
				</form>
			</>
		);
	}
}

export default AddColorPage;
