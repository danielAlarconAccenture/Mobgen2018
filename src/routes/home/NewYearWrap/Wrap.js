import { h } from 'preact';
import styled from 'styled-components';

export default styled.div`
	pointer-events: none;
	max-width: 450px;
	margin: 0 auto;
	flex: 0 0 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		height: auto;
		width: 441px;
		max-width: 100%;
	}
`;
