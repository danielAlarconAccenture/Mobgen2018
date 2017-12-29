import { h } from 'preact';
import H3 from '../../../components/H3';
import Paragraph from '../../../components/Paragraph';
import Image from '../../../components/Image';
import AlignEndWrap from './AlignEndWrap';
import AlignStartWrap from './AlignStartWrap';
import Wrap from './Wrap';
import ClickForMagicWrap from './ClickForMagicWrap';

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
			<ClickForMagicWrap>
				<Paragraph text="Click around for magic" />
				<Image src={`../../assets/images/press.png`} />
			</ClickForMagicWrap>
		</Wrap>
	);
};

export default NewYearWrap;
