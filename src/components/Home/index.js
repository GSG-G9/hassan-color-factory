import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import './style.css';

import ColorPage from '../ColorPage';
import Header from '../Header';
import AddColorPage from '../AddColorPage';

class App extends Component {
	state = {
		colors: [
			{ name: 'red', value: '#FF0000' },
			{ name: 'blue', value: '#0000FF' },
			{ name: 'green', value: '#00FF00' },
		],
	};

	changeColor = (colorName, colorValue) => {
		console.log(colorValue);
		this.setState((prevState) => ({
			colors: [{ name: colorName, value: colorValue }, ...prevState.colors],
		}));
	};
	render() {
		return (
			<>
				<Switch>
					<Route
						exact
						path='/color'
						render={(props) => <Header colors={this.state.colors} {...props} />}
					/>
					<Route
						exact
						path='/color/new'
						render={(props) => (
							<AddColorPage changeColor={this.changeColor} {...props} />
						)}
					/>
					<Route
						exact
						path='/color/:color'
						render={(props) => (
							<ColorPage colors={this.state.colors} {...props} />
						)}
					/>
					<Redirect to='/color' />
				</Switch>
			</>
		);
	}
}
export default App;
