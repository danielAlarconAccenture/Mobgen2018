import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../style';

const StyledParagraph = styled.p`
	letter-spacing: 2px;
	font-family: 'GraphikLight';
	font-size: 1.2em;
	color: ${({ color }) => (color ? `${color}` : `none`)};
	${media.tablet`font-size: 1.2rem;`} ${media.phone`font-size: 1rem;`};
`;

const Subtitle = ({ text, color }) => (
	<StyledParagraph color={color}>{text}</StyledParagraph>
);

export default Subtitle;
