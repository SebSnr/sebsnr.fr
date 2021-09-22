import React from "react"
import {Link} from "react-router-dom"

export default function Footer() {
	return (
		<div className="footer">
			{/* <div className="footer__review container">
				<h4>
					Références <i class="fab fa-circle fa-linkedin"></i>
				</h4>
				<div className="footer__review__item">
					<img src="./images/Aslem.png" alt="profil" />
					<div className="lkName">
						<span className="lkName__title">
							Aslem Smida
							<br />
						</span>
						<span className="lkName__function">Company Owner & CEO chez Treenity Group</span>
					</div>

					<blockquote>
						" Durant les 3 années qu'il a travaillé chez SMD Conseil en tant que Chargé de Production(dans le spectacle vivant), Sébastien Sanner a montré une capacité d'adaptation et
						d'apprentissage impressionnantes. Il a également su faire preuve de beaucoup de rigueur, d'une grande capacité de travail et d'une loyauté certaine. Un exemple de
						professionnalisme. De plus, Sébastien aime les défis et ne recule devant rien pour les relever. Je le recommande donc vivement à qui envisage de faire appel à ses services. "
					</blockquote>
				</div>
				<div className="footer__review__item">
					<img src="./images/Colin.png" alt="profil" />
					<div className="lkName">
						<span className="lkName__title">
							Colin Faivre
							<br />
						</span>
						<span className="lkName__function">Développeur Vue.js au CRI - Mentor Openclassrooms</span>
					</div>

					<blockquote>
						" J'ai accompagné Sébastien pendant sa formation au développement web. Je suis impressionné par sa rapidité d'adaptation et son professionalisme. Un profil rare pour renouveler
						votre équipe front. "
					</blockquote>
				</div>
			</div> */}
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
