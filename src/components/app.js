import { h, Component } from 'preact';
import { Router } from 'preact-router';

import '../style/fonts';
import { COLORS } from '../style';
import Home from '../routes/home';
import Container from '../components/Container';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Container fullHeight backgroundColor={COLORS.BLACK}>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
			</Container>
		);
	}
}
