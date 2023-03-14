import React from 'react';

function About() {
	return (
		<section>
			<div className="content" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="content">
				<img
					src={require('../../assets/images/mypic.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Fullstack engineer with multi-tasking abilities. I focus on breaking down difficult tasks into manageable parts by
					using my problem-solving skills to create a workable solution. Having the ability to adapt quickly to a
					variety of situations and manage multiple projects simultaneously is one of my strengths. I am a fast and
					versatile programmer with excellent communication skills. My main goal is to break down difficult tasks into
					easy-to-solve tasks. I have always been on time and completed my projects before deadlines and have always
					proven to be a problem solver. Being able to adapt quickly to different situations and handle multiple
					projects at once is one of my strongest suits.
				</p>
			</div>
		</section>
	);
}

export default About;
