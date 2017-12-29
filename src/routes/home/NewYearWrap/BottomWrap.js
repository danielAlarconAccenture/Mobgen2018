import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../../style';

export default styled.div`
	align-self: stretch;
	bottom: 30px;
	position: relative;
	display: flex;
	justify-content: space-between;
	z-index: 0;
	${media.tablet`
	margin: 10px 0;`} ${media.phone`margin: 10px 0;`};
`;
