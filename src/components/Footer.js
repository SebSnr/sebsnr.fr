import React from "react"
import {Link} from "react-router-dom"

export default function Footer() {
	return (
		<div className="footer" id="contact">
			<div className="footer__contact container">
				<div className="footer__contact__links">
					<h4>Contact</h4>
					<ul>
						<li>
							<Link to={{pathname: "https://www.linkedin.com/in/sebastiensanner/"}} target="_blank">
								<i class="fab fa-circle fa-linkedin"></i>
								sebastiensanner
							</Link>
						</li>
						<li>
								Retrouvez encore plus de codes sur : <br />
								<Link to={{pathname: "https://github.com/SebSnr/"}} target="_blank">
									{/* <i class="fab fa-github"></i> */}
									<img src="./images/Octocat.png" alt="GitHub" className="github" />
									SebSnr
								</Link>
						</li>
					</ul>
				</div>
				<div className="footer__contact__mail">
					<p>
						Vous avez aimé mon travail ? Envie de discuter chaleureusement autour du web ou de votre passion ? <br />
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
