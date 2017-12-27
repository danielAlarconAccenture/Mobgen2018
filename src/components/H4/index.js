import { h } from 'preact';
import styled from 'styled-components';

const StyledH4 = styled.h4`
	font-size: 2rem;
	display: block;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

const H4 = ({ text }) => <StyledH4>{text}</StyledH4>;

export default H4;
