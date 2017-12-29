import { h } from 'preact';
import styled from 'styled-components';

export default styled.div`
	flex: 0 0 100%;
	justify-content: center;
	margin-top: 20px;
	display: flex;
	flex-direction: column-reverse;
	align-items: center;

	img {
		width: 34px;
		position: relative;
	}

	p {
		margin: 10px 0;
		font-size: 1rem;
	}
`;
