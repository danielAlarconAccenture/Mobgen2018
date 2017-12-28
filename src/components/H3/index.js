import { h } from 'preact';
import styled from 'styled-components';

const StyledH3 = styled.h3`
	margin: 0;
	font-size: 2.6rem;
	font-weight: bold;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	min-height: 24px;
`;

const H3 = ({ text, style }) => <StyledH3 class={style}>{text}</StyledH3>;

export default H3;
