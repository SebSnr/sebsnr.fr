import React from "react"
import {Link} from "react-router-dom"

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer__contact container" id="contact">
				<div className="footer__contact__links">
					<h4>Contact</h4>
					<ul>
						<li>
							<Link to={{pathname: "https://github.com/SebSnr/"}} target="_blank">
								<img src="./images/Octocat.png" alt="GitHub" className="github" />
								SebSnr
							</Link>
						</li>
						<li>
							<Link to={{pathname: "https://www.linkedin.com/in/sebastiensanner/"}} target="_blank">
								<i class="fab fa-circle fa-linkedin"></i>
								sebastiensanner
							</Link>
						</li>
					</ul>
				</div>
				<div className="footer__contact__mail">
					<p>
						Vous avez aimé mon travail ? Vous avez des questions ?<br />
						Ou tout simplement envie de discuter ?<br />
						<br />
						Vous pouvez me contacter via Linkedin ou directement par mail.
					</p>
					<button
						onClick={(e) => {
							window.location = "mailto: sanner.sebastien@gmail.com"
							e.preventDefault()
						}}
						className="btn btn--1"
					>
						On en parle <i class="far fa-envelope"></i>
					</button>
				</div>
			</div>
			<div className="footer__mentions">
				<div>sebsnr.fr</div>
				<div>© 2021 tous droits réservés</div>
			</div>
		</div>
	)
}
