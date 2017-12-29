import { h, Component } from 'preact';
import styled from 'styled-components';
import Subtitle from '../../components/Subtitle';
import Fireworks from '../../components/Fireworks';
import NewYearWrap from './NewYearWrap';
import style from './style';
import Container from '../../components/Container';
import Logo from './Logo';

const SubtitleWrap = styled.div`
	flex: 0 0 100%;
	align-content: center;
	text-align: center;
`;

const InnerContainer = styled.div`
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	align-content: space-between;
	padding: 0 20px;
	pointer-events: none;
	user-select: none;
`;

export default class Home extends Component {
	state = {
		counter: 0,
		doWeGotBalls: false
	};

	handleCounter = () => {
		const { counter } = this.state;
		counter === 10
			? this.show606()
			: this.setState(() => ({
				counter: counter + 1,
				doWeGotBalls: false
			}));
	};

	show606 = () => {
		this.setState(() => ({
			...this.state,
			counter: 0,
			doWeGotBalls: true
		}));
	};

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextState.counter === 10;
	// }

	render(props, state) {
		return (
			<Container fullHeight class={style.main} paddingVertical>
				<InnerContainer onClick={this.handleCounter}>
					<Fireworks />
					<Logo />
					<NewYearWrap doWeGotBalls={state.doWeGotBalls} />
					<SubtitleWrap>
						<Subtitle text="BEST WISHES FROM MOBGEN ❤️" />
					</SubtitleWrap>
				</InnerContainer>
			</Container>
		);
	}
}
