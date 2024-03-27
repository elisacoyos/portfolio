import React, { useState, useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';
import styled from 'styled-components';
import colors from '../style/colors';
import RoundButton from './RoundButton';
import skillsData from '../assets/datas/skillsData.json';

const StyledSkills = styled.div`
	margin: 2rem auto;
	padding-top: 120px;
	width: 90%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	& h1 {
		font-size: 2rem;
		margin-bottom: 3rem;
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	}
	& .parcour {
		margin: 2rem auto;
	}
`;

const StyledCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
	gap: 3rem;
`;

const StyledCard = styled.div`
${'' /* border: 1px solid pink; */}
	position: relative;
    width: 350px;
	max-height: 130px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
    border-radius: 6px;
    padding: 1.5rem 1rem;
    cursor: pointer;
    background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
    transition: all 0.3s ease;
	& .moreContentBtn {
		position: absolute;
		bottom: -1.5rem;
		scale: 0.6;
		z-index: 10;
		${'' /* visibility: hidden; */}
		display: none;
    	transition: all 0.3s ease;
		&>div {
			color: ${colors.bodyDark};
			background: ${colors.primary};
			box-shadow: none;
		}
		${'' /* &.active {
			visibility: visible;
			height: auto;
			background: ${colors.primary};
		} */}
	}
	&.active {
		max-height: 1000px;
		background: ${colors.primary};
		transition: all 0.3s ease;
	}
    &:hover {
        ${'' /* color: ${colors.bodyDark}; */}
		background: ${colors.primary};
        transform: translateY(-3px);
		& h3 {
			${'' /* color: ${colors.white}; */}
			transition: 0.3s ease;
		}
		& .moreContentBtn {
			transition: 0.3s ease;
			${'' /* visibility: visible; */}
			display: flex;
		}
    }
	& h2,h3 {
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	}

	& .content {
		visibility: hidden;
        margin-top: 1rem;
        margin-bottom: 0.3rem;
        padding: 1rem;
        width: 100%;
        border-radius: 6px;
        background-color: ${colors.backgroundLight};
        color: ${colors.bodyLight};
		transition: all 0.3s ease;
        transform: scaleY(0);
        transform-origin: top;  // Ce paramètre indique que le contenu s'étend à partir du haut
        box-shadow: ${colors.innerShadowDark};

        &.active {
			visibility: visible;
            transform: scaleY(1);
			transition: all 0.3s ease;
        }
        & ul li {
            margin-left: 1rem;
			margin-bottom: 0.4rem;
			font-size: 0.9rem;
            font-style: italic; 
            list-style: inherit;
            &:hover {
                color: ${colors.primary};
            }
        }
    }
`;

const StyledLogosContainer = styled.div`
		height: 40px;
		margin-bottom: 1rem;
		display: flex;
		gap: 1rem;
		z-index: 10;
		transition: 0.3s ease;
		& img {
			height: 100%;
		}
	`;

	export default function Skills() {
	const { darkMode } = useContext(ThemeContext);

	// Initialiser le state avec un objet
	const [activeCards, setActiveCards] = useState({
		frontend: false,
		jsReact: false,
		seoDebug: false,
	});

	// fonction qui permet de changer la valeur d'une propriété de l'objet
	const handleToggle = (cardName) => {
		setActiveCards(prevState => ({
			...prevState,
			[cardName]: !prevState[cardName]
		}));
	};



	return (
		<StyledSkills id='skills' $isDarkMode={darkMode}>
			<h1>Mes compétences</h1>

			<StyledCardsContainer>
			
			{skillsData.map(({ index, name, title, logosLight, logosDark, content }) => (
					<StyledCard
						key={`${name}-${index}`}
						name={name}
						title={title}
						$logosDark={logosDark}
						$logosLight={logosLight}
						content={content}
						className={`card ${activeCards[name] && 'active'}`} // utilisez 'name' ici
						$isDarkMode={darkMode}
						onClick={() => handleToggle(name)}>

						<StyledLogosContainer className='logos'>
							{darkMode
								?
								logosDark.map((logo, index) => (<img key={index} src={logo} alt={`${name}-${index}`} />
								))
								:
								logosLight.map((logo, index) => (<img key={index} src={logo} alt={`${name}-${index}`} />
								))}
						</StyledLogosContainer>
						<h3>{title}</h3>
						<div className="moreContentBtn" onClick={() => handleToggle(name)}> {/* utilisez 'name' ici */}
						<RoundButton symbol={activeCards[name] ? "-" : "+"} />
						</div>
						<div className={`content ${activeCards[name] && 'active'}`}> {/* utilisez 'name' ici */}
							<ul>
								{content.map((item, index) => (<li key={index}>{item}</li>))}
							</ul>
						</div>
					</StyledCard>
				))}
			

			</StyledCardsContainer>

			{/* <h3 className='parcour'>Mon parcour & expérience</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit laboriosam voluptatibus ut nemo qui voluptates placeat eveniet impedit dignissimos earum aut officia voluptas quae commodi quidem cum pariatur odit, aspernatur, praesentium, iure esse inventore nobis. Dolore quaerat facilis iste amet. Porro perferendis temporibus vel ipsum molestiae reiciendis neque exercitationem?</p> */}

		</StyledSkills>
	);
}

