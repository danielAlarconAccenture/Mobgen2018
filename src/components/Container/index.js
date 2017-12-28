import { h } from 'preact';
import styled from 'styled-components';

const Container = styled.div`
	height: ${({ fullHeight }) => (fullHeight ? `100%` : `auto`)};
	width: ${({ fullWidth }) => (fullWidth ? `100%` : `auto`)};
	padding: 20px 0;
`;

export default Container;
