import { h } from 'preact';
import H3 from '../../../components/H3';
import Image from '../../../components/Image';
import AlignEndWrap from './AlignEndWrap';
import AlignStartWrap from './AlignStartWrap';
import Wrap from './Wrap';

const NewYearWrap = ({ doWeGotBalls }) => {
	const imgUrl = doWeGotBalls ? '606' : '2018';
	return (
		<Wrap>
			<AlignStartWrap>
				<H3 text="MAKE" />
			</AlignStartWrap>
			<Image src={`../../assets/images/${imgUrl}.png`} />
			<AlignEndWrap>
				<H3 text="SPARK" />
			</AlignEndWrap>
		</Wrap>
	);
};

export default NewYearWrap;
