import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../style';

const StyledH3 = styled.h3`
	margin: 0;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-family: 'GraphikBlack';
	font-size: 3rem;
	color: ${({ color }) => (color ? `${color}` : `none`)};
	${media.tablet`font-size: 2.4rem;`} ${media.phone`font-size: 2.2rem;`};
`;

const H3 = ({ text, color }) => <StyledH3 color={color}>{text}</StyledH3>;

export default H3;
