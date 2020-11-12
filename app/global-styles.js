import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .btn-warning{
    border-radius:30px
    background-color:#f39c12
  }
  .inputBox{
    height:3rem
    width:75%
    border-radius:30px
    outline:none
    border:2px solid #f39c12
    padding-left:20px
  }
  .audioSpell:focus{
    outline:none
  }
  span{
    font-family: 'Roboto', sans-serif;
    font-size:1.2rem
  }
  .headingDictionary{
    color:#e67e22
  }
`;

export default GlobalStyle;
