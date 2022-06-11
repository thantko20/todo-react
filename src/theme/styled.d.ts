import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        medium: string;
        light: string;
        lightest: string;
        dark: string;
        darkest: string;
      };
      darkGray: string;
      lightGray: string;
      gray: string;
      textGray: string;
      lightestGray: string;
    };

    borderRadius: {
      button: string;
    };
  }
}
