import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a href="https://github.com/JM-Santi">
					<img src={require("../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a href="https://www.linkedin.com/in/jean-michael-santiago/">
					<img src={require("../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
