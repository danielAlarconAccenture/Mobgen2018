import { h } from 'preact';
import styled from 'styled-components';
import Image from '../../components/Image';
import { media } from '../../style';

const Wrap = styled.div`
	flex: 0 0 100%;

	img {
		position: relative;
		margin-left: auto;
		display: block;
		width: 94px;
		${media.tablet`width: 70px;`} ${media.phone`width: 40px;`};
	}
`;

const Logo = () => (
	<Wrap>
		<Image src="../../assets/images/logo.png" />
	</Wrap>
);

export default Logo;
