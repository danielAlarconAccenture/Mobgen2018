import { h } from 'preact';
import styled from 'styled-components';
import { COLORS } from '../../style';

export default styled.span`
	&:after {
		background: ${COLORS.ORANGE};
		content: '';
		display: block;
		height: 2px;
		position: relative;
		width: 24px;
	}
`;
