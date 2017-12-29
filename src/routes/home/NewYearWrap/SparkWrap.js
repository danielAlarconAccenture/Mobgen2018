import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../../style';

export default styled.div`
	position: relative;
	bottom: 26px;
	${media.tablet`
	bottom: 34px;`} ${media.phone`bottom: 26px;`};
`;
