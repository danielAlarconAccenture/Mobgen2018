import { h } from 'preact';
import styled from 'styled-components';

const StyledParagraph = styled.p`
	font-family: 'GraphikRegular';
	color: ${({ color }) => (color ? `${color}` : `none`)};
`;

const Paragraph = ({ text, color }) => (
	<StyledParagraph color={color}>{text}</StyledParagraph>
);

export default Paragraph;
