import { h } from 'preact';
import styled from 'styled-components';
import H3 from '../../components/H3';
import Subtitle from '../../components/Subtitle';
import Image from '../../components/Image';
import AlignEndWrap from './AlignEndWrap';
import Fireworks from '../../components/Fireworks';
import AlignStartWrap from './AlignStartWrap';
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
`;

const Home = () => (
	<Container fullHeight class={style.main}>
		<InnerContainer>
			<Fireworks />
			<Logo />
			<NewYearWrap>
				<AlignStartWrap>
					<H3 text="MAKE" style={style.make} />
				</AlignStartWrap>
				<Image src="../../assets/images/2018.png" />
				<AlignEndWrap>
					<H3 class={style.spark} text="SPARK" />
				</AlignEndWrap>
			</NewYearWrap>
			<SubtitleWrap>
				<Subtitle text="BEST WISHES FROM MOBGEN ❤️" />
			</SubtitleWrap>
		</InnerContainer>
	</Container>
);

export default Home;
