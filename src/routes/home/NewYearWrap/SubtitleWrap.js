import { h } from 'preact';
import styled from 'styled-components';
import { media } from '../../../style';

export default styled.div`
	align-self: flex-start;
	text-align: left;

	p {
		margin: 7px 0;
		font-size: 1.4rem;
		${media.tablet`
	font-size: 1.2rem;`} ${media.phone`font-size: 1.1rem;`};
	}
`;
