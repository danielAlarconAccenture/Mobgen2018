import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../style';

const StyledParagraph = styled.p`
	letter-spacing: 2px;
	font-family: 'GraphikLight';
	font-size: 1.2em;
	${media.tablet`font-size: 1.2rem;`} ${media.phone`font-size: 1rem;`};
`;

const Subtitle = ({ text }) => <StyledParagraph>{text}</StyledParagraph>;

export default Subtitle;
