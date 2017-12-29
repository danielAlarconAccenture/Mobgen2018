import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../../style';

export default styled.div`
	align-self: flex-start;
	position: relative;
	top: 61px;
	${media.tablet`top: 54;`} ${media.phone`top: 36px;`};
`;
