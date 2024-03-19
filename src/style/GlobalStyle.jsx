import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-style: normal;
    // border: 0.7px solid skyblue;
}
    body {
        background-color: ${({ isDarkMode }) =>
		!isDarkMode ? colors.backgroundLight : colors.backgroundDark};
        margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
    }
`

export default GlobalStyle