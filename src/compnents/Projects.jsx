import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Minimart-ecommerce.png";
import projImg2 from "../assets/img/world wise.png";
import projImg3 from "../assets/img/Faast pizza.png";
import projImg4 from "../assets/img/spotify.png";
import projImg5 from "../assets/img/use popcorn.png";
import projImg6 from "../assets/img/disneyImg.png";
import projImg7 from "../assets/img/AlsaifImg.png";
import projImg8 from "../assets/img/travelApp.png";
import projImg9 from "../assets/img/GradProject.jpeg";
import projImg10 from "../assets/img/udemy.png";
import projImg11 from "../assets/img/kasper.png";
import projImg12 from "../assets/img/atomicblog.png";
import projImg13 from "../assets/img/Eat&split.png";
import projImg14 from "../assets/img/leon.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	const projects = [
		{
			title: "Minimart ecommerce",
			description:
				"Minimart e-commerce, built with ReactJS, Redux for state management, and styled using Reactstrap. Authentication is powered by Firebase, offering a smooth checkout process after creating an account.",
			imgUrl: projImg1,
			projUrl: "https://minimart-deployed-version.netlify.app/home",
		},
		{
			title: "Fast-Pizza Co",
			description:
				"Fast Pizza Co. Leveraging the power of Redux and Tailwind. Simply enter your name, explore the menu, and smoothly navigate to the cart for a quick checkout. The backend generates a unique ID for easy order tracking, enhancing user convenience.",
			imgUrl: projImg3,
			projUrl: "https://fast-pizza-delivary.netlify.app/",
		},
		{
			title: "Al-Saif For Construction",
			description: `A successfully launched and deployed freelancing project for Al-Saif Construction in Saudi Arabia.`,
			imgUrl: projImg7,
			projUrl: "https://www.alsaifbuild.com/",
		},
		{
			title: "World Wise",
			description:
				"Simple web app that allows users to keep track of the places they've visited. Built to highlight routing, the react context API as well as the leaflet library.",
			imgUrl: projImg2,
			projUrl: "https://github.com/ahmed-kkamel/World-Wise",
		},
		{
			title: "Spotify Clone",
			description:
				"A fully functional Spotify Clone with React JS, Styled Components using Spotify API and Context API.",
			imgUrl: projImg4,
			projUrl: "https://github.com/ahmed-kkamel/Spotify-Clone",
		},
		{
			title: "Use Popcorn",
			description: `This application allows users to discover and explore movies using the OMDB API. Users can search for movies,
			view movie details, rate movies, and save them to a watchlist for future viewing.
			`,
			imgUrl: projImg5,
			projUrl: "https://usepopcorn-omdb-api.netlify.app/",
		},
		{
			title: "Disney+ Clone",
			description: `A full-stack project construct a functional mini Disney+ simulation. and real-time database functionality is
			achieved with Firestore.
			`,
			imgUrl: projImg6,
			projUrl: "https://disneyplus-clone-app.netlify.app/home",
		},
		{
			title: "HiLink for camping",
			description: `A SEO-friendly landing page, scoring a perfect 100% SEO on the Lighthouse tool analytics.`,
			imgUrl: projImg8,
			projUrl: "https://hilink-camping.netlify.app/",
		},
		{
			title: "Geaduation Project",
			description: `Presenting car data and news, allowing users to create listings for used vehicles, with AI-based price prediction.`,
			imgUrl: projImg9,
			projUrl: "https://github.com/ahmed-kkamel/GraduationProject",
		},
		{
			title: "Udemy Clone",
			description: `An app implementing the key features of Udemy.`,
			imgUrl: projImg10,
			projUrl: "https://udemy-clone-deployed-version.netlify.app/",
		},
		{
			title: "The Atomic Blog",
			description: `A React application that allows users to create, search, and manage blog posts. It features a dark mode toggle, search functionality, and the ability to add and clear posts. Users can also view an archive of posts and add them as new posts. `,
			imgUrl: projImg12,
			projUrl: "https://theatomicblog.netlify.app/",
		},
		{
			title: "Eat & Split",
			description: `React app to split bills, track shared expenses in a group of friends easily and find out "Who owes whom and how much?" with a transaction minimization algorithm.`,
			imgUrl: projImg13,
			projUrl: "https://eatandsplit-deployed.netlify.app/",
		},
		{
			title: "Kasper",
			description: `A simple template made with Html & Css`,
			imgUrl: projImg11,
			projUrl: "https://kaspercsstemplate.netlify.app/",
		},
		{
			title: "Leon",
			description: `A simple template made with Html & Css`,
			imgUrl: projImg14,
			projUrl: "https://leoncss.netlify.app/",
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<h2>Projects</h2>
									<p>
										Explore my portfolio's Projects section, where I showcase my
										passion and expertise in web development.
									</p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="first">Tab 1</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">Tab 2</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">Tab 3</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible ? "animate__animated animate__slideInUp" : ""
											}
										>
											<Tab.Pane eventKey="first">
												<Row>
													{projects
														.map((project, index) => {
															return <ProjectCard key={index} {...project} />;
														})
														.slice(0, 6)}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<Row>
													{projects
														.map((project, index) => {
															return <ProjectCard key={index} {...project} />;
														})
														.slice(6, 12)}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<Row>
													{projects
														.map((project, index) => {
															return <ProjectCard key={index} {...project} />;
														})
														.slice(12, 18)}
												</Row>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-right"
				src={colorSharp2}
				alt="section"
			></img>
		</section>
	);
};
