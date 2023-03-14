import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Paws and Whiskers',
			image: 'pawsandwhiskers.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
			],
			github: 'https://github.com/JM-Santi/pawsandwhiskers.git',
			deployed: 'https://paws-and-whiskers.herokuapp.com/',
		},
		{
			name: 'A Night In',
			image: 'a_night_in.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'JQuery',
				'Materialize',

			],
			github: 'https://github.com/magmesser/a-night-in.git',
			deployed: 'https://magmesser.github.io/a-night-in/',
		},
		
	];

	return (
		<section>
			<div className="content">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
