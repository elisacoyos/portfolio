import { useState, useEffect, useContext } from 'react';
import profilePhoto from '../assets/images/profile_photo.png';
import ToggleThemeButton from './ToggleThemeButton';
import styled from 'styled-components';
import colors from '../style/colors';
import { ThemeContext } from '../utils/context/ThemeProvider';


const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 0;
	gap: 1rem;
	transition: 0.3s ease;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
`
const StyledHeader = styled.div`
	background-color: ${({ $isDarkMode }) => $isDarkMode ? colors.backgroundDark : colors.backgroundLight};
	${'' /* border-bottom: 1px solid var(--color-lightgray); */}
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 2rem;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	height: 100px;
	transition: 0.5s ease;
	
	&.header--scrolled {
        height: 60px;
        box-shadow: 10px 10px 19px rgba(0, 0, 0, 0.1);
		opacity: 0.9;
		
        ${StyledLogo} {
            transform: scale(0.8);
        }
    }
`

const StyledNav = styled.div`
		display: flex;
		align-items: center;
		margin: 0 1rem;
		
		& ul {
			display: flex;
			gap: 1rem;
			margin: 1rem;
			color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
			font-weight: 600;
			transition: 0.5s ease;
			&:hover {
				color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyLight : colors.bodyDark};
			}
			& li {
				cursor: pointer;
				&:hover {
					color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
					transition: 0.5s ease;
				}
			}
		}
		& .cv {
			cursor: pointer;
			display: flex;
			color: ${colors.primary};
			border-radius: 6px;
			padding: 10px;
			background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
			box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};

			transition: 0.5s ease;
			font-weight: 500;
				&:hover {
				color: ${colors.white};
				background: ${colors.primary};
				transform: translateY(-3px);
	}
	}
    `

const StyledProfilePhoto = styled.img`
	border: 3px solid lightgray;
	display: flex;
	width: 65px;
	height: 65px;
	border-radius: 50%;
`



export default function Header() {

	const { darkMode } = useContext(ThemeContext);

	// est-ce que la page est scrollée ?
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
				// console.log('scroll');
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<StyledHeader $isDarkMode={darkMode} className={isScrolled ? 'header--scrolled' : ''}>
			<StyledLogo $isDarkMode={darkMode}>
				<StyledProfilePhoto src={profilePhoto} alt="logo" />
				<h3>Elisa COYOS</h3>
			</StyledLogo>

			<ToggleThemeButton />

			<StyledNav $isDarkMode={darkMode}>
				<ul className='header__nav'>
					<li>Accueil</li>
					<li>Skills</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</ul>
				<div className="cv">Télécharger mon CV</div>
			</StyledNav>
		</StyledHeader>
	);
}