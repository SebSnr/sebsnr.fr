import React from "react"
import {NavLink} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

export default function Navigation() {
	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					<NavLink className="navbar-brand" to="/" /*title="accueil"*/>
						SEB.SNR
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#ftco-nav"
						aria-controls="ftco-nav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						title="Toggle navigation"
					>
						<span className="fa fa-bars"></span>
					</button>
					<div className="collapse navbar-collapse flex-grow-0" id="ftco-nav">
						<ul className="navbar-nav ml-auto mr-md-3">
							<li className="nav-item">
								<HashLink to="#mescompetences" className="nav-link">
									Compétences
								</HashLink>
							</li>
							<li className="nav-item">
								<HashLink to="#mesprojets" className="nav-link">
									Projets
								</HashLink>
							</li>
							<li className="nav-item nav-item--cv">
								<NavLink className="nav-link" to="/CV_Sebastien_Sanner_DEV_JAVASCRIPT.pdf" target="_blank">
									CV
								</NavLink>
							</li>
							<li className="nav-item nav-item--contact">
								<HashLink to="#contact" className="nav-link">
									Contact
								</HashLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
