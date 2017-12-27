import { h } from 'preact';
import styled from 'styled-components';

const Container = styled.div`
	height: ${({ fullHeight }) => (fullHeight ? `100vh` : `auto`)};
	width: ${({ fullWidth }) => (fullWidth ? `100vw` : `auto`)};
`;

export default Container;
