import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`



	
::-webkit-scrollbar {
    width: 0;       /* Pour les barres de défilement verticales */
    height: 0;      /* Pour les barres de défilement horizontales */
}


	html {
		scroll-behavior: smooth;
	}
    
	input, textarea:focus {
		outline: none;
		}

	
        *,::before,::after 
        {
    ${'' /* border: 1px solid pink; */}
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-style: normal;
    /* ? désactivation de la bordure au focus */
    input:focus {
    outline: none;
    }
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