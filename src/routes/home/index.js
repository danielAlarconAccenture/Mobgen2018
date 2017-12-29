import { h, Component } from 'preact';
import styled from 'styled-components';
import Fireworks from '../../components/Fireworks';
import Container from '../../components/Container';
import ClickForMagicWrap from './ClickForMagicWrap';
import Paragraph from '../../components/Paragraph';
import Image from '../../components/Image';
import NewYearWrap from './NewYearWrap';
import style from './style';
import Logo from './Logo';
import { COLORS } from '../../style';

const InnerContainer = styled.div`
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	align-content: space-between;
	padding: 0 20px;
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
			<Container
				fullHeight
				class={style.main}
				paddingVertical
				backgroundColor="#000"
			>
				<InnerContainer onClick={this.handleCounter}>
					<Fireworks />
					<Logo />
					<NewYearWrap doWeGotBalls={state.doWeGotBalls} />

					<ClickForMagicWrap>
						<Paragraph
							text="Click around for magic"
							color={COLORS.GRAY}
							fontSize="1rem"
						/>
						<Image src={`../../assets/images/press.gif`} />
					</ClickForMagicWrap>
				</InnerContainer>
			</Container>
		);
	}
}
