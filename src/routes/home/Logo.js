import { h } from 'preact';
import styled from 'styled-components';
import Image from '../../components/Image';

const Wrap = styled.div`
	flex: 0 0 100%;

	img {
		position: relative;
		margin-left: auto;
		display: block;
		width: 40px;
	}
`;

const Logo = () => (
	<Wrap>
		<Image src="../../assets/images/logo.png" />
	</Wrap>
);

export default Logo;
