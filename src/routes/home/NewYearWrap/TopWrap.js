import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../../style';

export default styled.div`
	align-self: flex-start;
	position: relative;
	top: 32px;
	${media.tablet`top: 25px;`} ${media.phone`top: 25px;`};
`;
