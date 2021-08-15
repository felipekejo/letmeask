import { createGlobalStyle, css } from 'styled-components';

interface GlobalProps {
  theme: 'light' | 'dark';
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
:root{
  --backgroundLight:#F8F8F8;
  --textLight:#29292E;
  --backgroundDark:#707070;
  --textDark:#d6d6d1;
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body {
  ${props => props.theme === 'light' ?
    css`
  background:var(--backgroundLight);
  color:var(--textLight);
  `
    : css`
  background:var(--backgroundDark);
  color:var(--textDark);
  `
  };
 
  
}

body, input, button, textarea {
  font:400 16px 'Roboto',sans-serif;

}
`