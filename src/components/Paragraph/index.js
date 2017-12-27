import { h } from 'preact';
import styled from 'styled-components';

const StyledParagraph = styled.p`
	font-size: 1.4rem;
	font-weight: bold;
`;

const Paragraph = ({ text }) => <StyledParagraph>{text}</StyledParagraph>;

export default Paragraph;
