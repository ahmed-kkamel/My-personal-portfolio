import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className="proj-imgbx">
				<img src={imgUrl} alt={title} />
				<div className="proj-txtx">
					<h4>{title}</h4>
					<span>{description}</span>
					<div className="project-url">
						<a href={projUrl} target="_blank">
							<span>Preview</span>
						</a>
					</div>
				</div>
			</div>
		</Col>
	);
};
