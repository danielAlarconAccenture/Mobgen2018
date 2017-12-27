import { h } from 'preact';
import styled from 'styled-components';

const StyledEmoji = styled.span`
	font-size: 1.8rem;
`;

const Emoji = ({ text }) => <StyledEmoji>{text}</StyledEmoji>;

export default Emoji;
