import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	const currentProject = useState(props)[0].projects;
	const name = currentProject.name;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const deployment = currentProject.deployed;
	const gitrepo = currentProject.github;

	
	function getTechs(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}
			return techList;
	}

	return (
		<Card style={{ width: "20rem" }}>
			<Card.Img
				variant="top"
				src={require(`../assets/images/${image}`)}
				className="card-image"
			/>
			<div className="content">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Subtitle className="card-subtitle">Technologies Used</Card.Subtitle>
					<Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
					<Card.Link href={deployment} className="card-link">
						<button className="btn btn-primary">Application</button>
					</Card.Link>
					<br></br>
					<Card.Link href={gitrepo} className="card-link">
						<button className="btn btn-primary">Github</button>
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;
