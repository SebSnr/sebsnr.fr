import {Button} from "bootstrap"
import React from "react"
import {Link} from "react-router-dom"

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer__contact container">
				<div className="footer__contact__links">
					<h4>Contact</h4>
					<ul>
						<li>
							<Link to={{pathname: "https://github.com/SebSnr/"}} target="_blank">
							<i class="fab fa-github"></i>
								SebSnr
							</Link>
						</li>
						<li>
							<i class="fab fa-linkedin"></i>
							<Link to={{pathname: "https://www.linkedin.com/in/sebastiensanner/"}} target="_blank">
								sebastiensanner
							</Link>
						</li>
					</ul>
				</div>
				<div className="footer__contact__mail">
					<p>
						Vous avez aimé mon travail ? Vous souhaitez échanger autour du web, d'une opportunité ou de votre passion ? <br />
						<br />
						N'hésitez pas à me contacter via Linkedin ou directement par mail.
						<br />
						<br />
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
