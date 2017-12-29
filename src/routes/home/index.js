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
import InnerContainer from './InnerContainer';

export default class Home extends Component {
	state = {
		counter: 0,
		doWeGotBalls: false,
		shitSurprise: false
	};

	// function for checking if a number is a multiple of 10
	multipleOfTen = number => number !== 0 && number % 10 === 0;

	handleCounter = () => {
		const { counter, shitSurprise } = this.state;
		if (shitSurprise) return;
		if (counter === 100) {
			this.showShitSurprise();
			return;
		}
		// if it's multiple from 10
		this.multipleOfTen(counter)
			? this.show606()
			: this.setState(() => ({
				counter: counter + 1,
				doWeGotBalls: false,
				shitSurprise: false
			}));
	};

	show606 = () => {
		this.setState(({ counter }) => ({
			...this.state,
			counter: counter + 1,
			doWeGotBalls: true,
			shitSurprise: false
		}));
	};

	showShitSurprise = () => {
		this.setState(() => ({
			...this.state,
			doWeGotBalls: false,
			shitSurprise: true
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
				backgroundColor={COLORS.BLACK}
			>
				<InnerContainer onClick={this.handleCounter}>
					<Fireworks />
					<Logo />
					<NewYearWrap
						doWeGotBalls={state.doWeGotBalls}
						shitSurprise={state.shitSurprise}
					/>

					<ClickForMagicWrap>
						<Paragraph
							text="Click around for magic"
							color={COLORS.GRAY}
							fontSize="1rem"
						/>
						<Image src={`../../assets/images/press-black.gif`} />
					</ClickForMagicWrap>
				</InnerContainer>
			</Container>
		);
	}
}
