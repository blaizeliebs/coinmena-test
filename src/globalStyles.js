import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0D1117;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .octicon {
    display: inline-block;
    overflow: visible;
    vertical-align: text-bottom;
    fill: currentColor;
  }

  .icon-sponsor, .icon-sponsoring {
    transition: transform .15s cubic-bezier(0.2, 0, 0.13, 2);
    transform: scale(1);
  }

  .color-fg-sponsors {
    color: #db61a2;
  }

  .anim-pulse-in {
    animation-name: pulse-in;
    animation-duration: .5s;
  }

  .color-fg-severe {
    color: #db6d28;
  }
`;
 
export default GlobalStyle;