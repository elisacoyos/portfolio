import React from 'react';
import styled from 'styled-components';
import photo from '../assets/images/profile_photo.png';

import colors from '../style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';



import FindMe from './FindMe';
import BestSkill from './BestSkill';

const StyledAboutMe = styled.div`
${'' /* height: 500px; */}
${'' /* border: 1px solid pink; */}

padding-top: 120px;
margin:  0 Auto;
display: flex;
align-items: center;
justify-content: center;
width: 80%;
max-width: 1440px;
gap: 3rem;
color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
@media screen and (max-width: 1100px) {
	flex-direction: column-reverse;
	
}
`


const StyledInfos = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
${'' /* height: 500px; */}


& p {
	margin: 1rem 0;
	font-size: 1.2rem;
}
& .title {
	font-size: 2rem;
	line-height: 1.2;	
	& .myName {
		color: ${colors.primary};
	}
}

& .badges {
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}

}
`

const StyledPhoto = styled.div`
	display: flex;
	align-items: center;
	height: 500px;
	& img {
		height: 100%;
	}
	@media screen and (max-width: 1100px) {
		height: 400px;
		margin: 0 1rem;
		
	}
	${'' /* @media screen and (max-width: 900px) {
		height: 300px;
		
	} */}
	`

	export default function AboutMe() {

	const { darkMode } = useContext(ThemeContext);

	return (

		<StyledAboutMe id='accueil' $isDarkMode={darkMode} >
			<StyledInfos>
				<div className='text'>
					<p>Bienvenue sur mon Portfolio !</p>
					<h1 className='title'>
						Bonjour, je suis
						<span className='myName'> Elisa COYOS</span>,
						<br />
						<span className='title-cation'>Integrateur Web</span>
					</h1>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae eum autem omnis ex, aliquam labore unde quo illum voluptatibus quibusdam facere neque saepe vitae odio iusto debitis vel magni nisi.</p>
				</div>
				<div className='badges'>
					

				<FindMe />
					<BestSkill />

				</div>
			</StyledInfos>

			<StyledPhoto>
				<img src={photo} alt="" />
			</StyledPhoto>

		</StyledAboutMe>
	);
}