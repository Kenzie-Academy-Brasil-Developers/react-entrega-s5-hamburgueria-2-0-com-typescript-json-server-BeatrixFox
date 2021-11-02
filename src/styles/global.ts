import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-size: 100%;
  text-decoration: none;
  line-height: 1;
  font-family: var(--main-font);
  
}
body {background-color: #fff;}
    
    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        
        --gray-scale-600: #333333;
        --gray-scale-300: #828282;
        --gray-scale-100: #e0e0e0;
        --gray-scale-0: #f5f5f5;


        --feedback-palette-negative: #e60000;
        --feedback-palette-warning: #ffcd07;
        --feedback-palette-success: #168821;
        --feedback-palette-information: #155bcb;

        --main-font:'Inter', sans-serif;

        --font-size-heading1: 26px;
        --font-size-heading2: 22px;
        --font-size-heading3: 18px;
        --font-size-headline: 16px;
        --font-size-body: 14px;
        --font-size-body-600: 14px;
        --font-size-caption: 12px;

        --font-w-regular: 400;
        --font-w-semibold: 600;
        --font-w-bold: 700;

        --button-default-width: 130px;
        --button-default-height: 60px;
        --button-default-borderradius: 8px;

        --button-medium-width: 130px;
        --button-medium-height: 40px;
        --button-medium-borderradius: 8px;

        --input-mobile-width: 340px;
        --input-mobile-height: 60px;
        --input-mobile-borderradius: 8px;

        --input-desktop-width: 450px;

    }
`;

export default GlobalStyles;
