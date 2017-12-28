import { injectGlobal } from 'styled-components';

import GraphikBlack from '../assets/fonts/Graphik-Black.ttf';

import GraphikLight from '../assets/fonts/Graphik-Light.ttf';

injectGlobal`
  @font-face {
    font-family: 'GraphikBlack';
    font-style: normal;
    font-weight: normal;
    src: url(${GraphikBlack});
    src: url(${GraphikBlack}+'?#iefix') format(embedded-opentype);
    src: url(${GraphikBlack}) format('opentype');
  }
  @font-face {
    font-family: 'GraphikLight';
    font-style: normal;
    font-weight: normal;
    src: url(${GraphikLight});
    src: url(${GraphikLight}+'?#iefix') format(embedded-opentype);
    src: url(${GraphikLight}) format('opentype');
  }
`;
