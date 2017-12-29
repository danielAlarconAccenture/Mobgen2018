import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../style';

const InnerContainer = styled.div`
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	align-content: space-between;
	user-select: none;
	padding: 0 60px;
	${media.tablet`padding: 0 40px;`} ${media.phone`padding: 0 20px;`};
`;

export default InnerContainer;
