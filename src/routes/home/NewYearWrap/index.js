import { h } from 'preact';
import H3 from '../../../components/H3';
import Image from '../../../components/Image';
import Subtitle from '../../../components/Subtitle';
import Stripe from '../../../components/Stripe';
import BottomWrap from './BottomWrap';
import TopWrap from './TopWrap';
import Wrap from './Wrap';
import SubtitleWrap from './SubtitleWrap';
import { COLORS } from '../../../style';
import SparkWrap from './SparkWrap';

const NewYearWrap = ({ doWeGotBalls }) => {
	const imgUrl = doWeGotBalls ? '606' : '2018';
	return (
		<Wrap>
			<TopWrap>
				<H3 text="MAKE" color={COLORS.WHITE} />
			</TopWrap>
			<Image src={`../../assets/images/${imgUrl}.png`} />
			<BottomWrap>
				<SubtitleWrap>
					<Stripe />
					<Subtitle text={`BEST WISHES,`} color={COLORS.GRAY} />
					<Subtitle text={`MUCH LOVE,`} color={COLORS.GRAY} />
					<Subtitle text={`THE MOBGEN TEAM`} color={COLORS.GRAY} />
				</SubtitleWrap>
				<SparkWrap>
					<H3 text="SPARK" color={COLORS.WHITE} />
				</SparkWrap>
			</BottomWrap>
		</Wrap>
	);
};

export default NewYearWrap;
