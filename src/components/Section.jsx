import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
	return (
		<Wrap bgImg={props.backgroundImg}>
			<Fade bottom>
				<ItemText>
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</ItemText>
			</Fade>

			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{props.leftBtnText}</LeftButton>
						{props.rightBtnText && (
							<RightButton>{props.rightBtnText}</RightButton>
						)}
					</ButtonGroup>
				</Fade>

				<DownArrow src='/images/down-arrow.svg' />
			</Buttons>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	z-index: 10;
	width: 100vw;
	height: 100vh;
	background-image: url("/images/model-3.jpg");
	background-image: ${props => `url("images/${props.bgImg}")`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const ButtonGroup = styled.div`
	text-transform: uppercase;
	display: flex;
	margin-bottom: 17px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	opacity: 0.85;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;

const RightButton = styled(LeftButton)`
	background: white;
	opacity: 0.65;
	color: black;
`;

const DownArrow = styled.img`
	margin-top: 20px;
	margin-bottom: 20px;
	height: 35px;
	animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
