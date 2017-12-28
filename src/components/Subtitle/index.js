import { h } from 'preact';
import styled from 'styled-components';

const StyledParagraph = styled.p`
	font-size: 1.4rem;
	letter-spacing: 2px;
`;

const Subtitle = ({ text }) => <StyledParagraph>{text}</StyledParagraph>;

export default Subtitle;
