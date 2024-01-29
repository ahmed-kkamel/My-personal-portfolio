import reactImg from "../assets/img/react.svg";
import nextImg from "../assets/img/next-js.svg";
import reduxImg from "../assets/img/redux.svg";
import htmlImg from "../assets/img/html-1.svg";
import cssImg from "../assets/img/css-3.svg";
import javascriptImg from "../assets/img/javascript-1.svg";
import tailwindcssImg from "../assets/img/tailwindcss.svg";
import sassImg from "../assets/img/sass-1.svg";
import bootstrapImg from "../assets/img/bootstrap-4.svg";
import typeScriptImg from "../assets/img/typescript-2.svg";
import pythonImg from "../assets/img/python-5.svg";
import firebaseImg from "../assets/img/firebase-1.svg";
import materialUiImg from "../assets/img/material-ui-1.svg";
import githubImg from "../assets/img/git-icon.svg";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Carousel from "react-multi-carousel";
import { Col, Row, Container } from "react-bootstrap";
const Skills = () => {
	const skills = [
		{ title: "React.js", imgUrl: reactImg },
		{ title: "Next.js", imgUrl: nextImg },
		{ title: "Redux", imgUrl: reduxImg },
		{ title: "Html", imgUrl: htmlImg },
		{ title: "Css", imgUrl: cssImg },
		{ title: "Java Script", imgUrl: javascriptImg },
		{ title: "Tailwind CSS", imgUrl: tailwindcssImg },
		{ title: "SASS", imgUrl: sassImg },
		{ title: "Bootstrap", imgUrl: bootstrapImg },
		{ title: "TypeScript", imgUrl: typeScriptImg },
		{ title: "Python", imgUrl: pythonImg },
		{ title: "Firebase", imgUrl: firebaseImg },
		{ title: "Material UI", imgUrl: materialUiImg },
		{ title: "Git", imgUrl: githubImg },
	];
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<p>
								Skilled in JavaScript, Python, and front-end technologies
								(React.js, Redux, Next.js)<br></br> with Strong foundation in
								OOP, Data Structures, Algorithms, and Agile<br></br> ensuring
								responsive web development. Experienced in SEO for optimal user
								experiences.
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
								autoPlay={true}
							>
								{skills.map((skill, index) => (
									<div className="item" key={index}>
										<img src={skill.imgUrl} alt={skill.title} />
										<h5>{skill.title}</h5>
									</div>
								))}
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-left"
				src={colorSharp}
				alt="background"
			/>
		</section>
	);
};

export default Skills;
