import React, { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';
import styled from 'styled-components';
import colors from '../style/colors';

import handshake from '../assets/images/handshake.webp';

import SmallBadge from './SmallBadge';

import linkedin from '../assets/images/logos/linkedin-light.png';
import github from '../assets/images/logos/github-light.png';
import email from '../assets/images/logos/email-light.png';

import linkedinDark from '../assets/images/logos/linkedin-dark.png';
import githubDark from '../assets/images/logos/github-dark.png';
import emailDark from '../assets/images/logos/email-dark.png';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mariaelisacoyos/';
const GITHUB_URL = 'https://github.com/elisacoyos';
const MAIL_TO_KEVIN = 'elisacoyosdev@gmail.com'





const StyledContact = styled.div`
margin: 2rem auto;
	padding-top: 120px;
	width: 80%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	& h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		${'' /* color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight}; */}
	}
`

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;  
	gap: 2rem;
	${'' /* height: auto; */}
	
`

const StyledInfos = styled.div`
	display: flex;
	width: 40%;
	height: auto;
	flex-direction: column;
	justify-content: center;
	border-radius: 6px;
	padding: 2rem;
	margin: auto auto;
	gap: 1rem;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	transition: 0.3s ease;
	& .thumbnail {
		height: 200px;
		width: 100%;
		margin-bottom: 2rem;
		border-radius: 6px;
		overflow: hidden;
		& img {
			z-index: 0;
			height: 200px;
			width: 100%;
			object-fit: cover;
			transition: 0.6s ease;
			${'' /* display: none; */}
		}
	}
	& .badgeContainer {
			margin-top: 1rem;
			display: flex;
			gap: 1.5rem;
		}
	&:hover {
            transform: translateY(-3px);
			& .thumbnail img {
				transform: scale(1.2);
			}
	}
`

const StyledForm = styled.div`
	display: flex;
	width: 60%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	border-radius: 6px;
	padding: 1.5rem;
	margin: auto auto;
	gap: 1rem;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	transition: 0.3s ease;
	& form {
		display: flex;
		flex-direction: column;
		
			& div {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin: 0.5rem 0;
			& input {
				background-color: ${({ $isDarkMode }) => $isDarkMode ? colors.inputBackgroungDark : "white"};
				border-radius: 6px;
				height: 55px;
				transition: var(--transition);
				border: 2px solid #191b1e;
				padding: 0 15px;
				font-size: 1rem;
				color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
				box-shadow: var(--inner-shadow);
				letter-spacing: 1px;
				}
				& label {
					margin-bottom: 0.5rem;
				}
			}
			& .message-container textarea {
				width: 100%;
				height: 235px;
				resize: none;
		}
		
		& .name-and-phone {
			display: flex;
			flex-direction: row;
			width: 100%;
			gap: 2rem;
		}
		
	}
	`
export default function Contact() {
	const { darkMode } = useContext(ThemeContext);
	return (
		<StyledContact id='contact' $isDarkMode={darkMode} >
		<h1>Me contacter</h1>
		<StyledContainer>

			<StyledInfos $isDarkMode={darkMode}>
				<div className="thumbnail">
					<img className='picture' src={handshake} alt="" />
				</div>

				<h3>Elisa COYOS</h3>
				<p>Integrateur Web</p>
				<p>Je suis actuellement disponible, en recherche d'un poste de développeur front-end dans une équipe ..</p>
				<p>Téléphone : <span>06 03 97 11 35</span></p>
				<p>Email : <span>elisacoyosdev@gmail.com</span></p>

				<div className="findMe">
					<p>Ou me trouver ?</p>
					<div className="badgeContainer">
						<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
							<SmallBadge logo={linkedin} logoDark={linkedinDark} hoverable />
						</a>
						<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
							<SmallBadge logo={github} logoDark={githubDark} hoverable />
						</a>
						<a href={MAIL_TO_KEVIN} >
							<SmallBadge logo={email} logoDark={emailDark} hoverable />
						</a>
					</div>
				</div>
			</StyledInfos>

			<StyledForm $isDarkMode={darkMode}>
				<form action="">
				<div className="name-and-phone">
							<div class="name-container">
								<label for="name">Votre nom</label>
								<input type="text" autoComplete="on" id="name" />
								<span></span>
							</div>

							<div class="phone-container">
								<label for="phone">N° de téléphone</label>
								<input type="text" autoComplete="on" id="phone" />
								<span></span>
							</div>
						</div>

						<div class="email-container">
							<label for="mail">Email</label>
							<input type="email" autocomplete="on" id="email" />
							<span></span>
						</div>

						<div class="message-container">
							<label for="message">Votre message</label>
							<textarea type="text" id="message" rows="" cols=""></textarea>
							<span></span>
						</div>

						<div class="submit-container">
							{/* <label for="submit">Envoyer</label> */}
							<input type="submit" id="submit" value="Envoyer" />
							<span></span>
						</div>
				</form>
			</StyledForm>

		</StyledContainer>
	</StyledContact>
	)
}