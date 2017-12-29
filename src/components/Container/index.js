import { h } from 'preact';
import styled from 'styled-components';

const Container = styled.div`
	height: ${({ fullHeight }) => (fullHeight ? `100%` : `auto`)};
	width: ${({ fullWidth }) => (fullWidth ? `100%` : `auto`)};
	padding: ${({ paddingVertical }) => (paddingVertical ? `20px 0` : `auto`)};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? `${backgroundColor}` : `none`};
`;

export default Container;
