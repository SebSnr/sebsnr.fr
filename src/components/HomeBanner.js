import React from "react"
import {HashLink} from "react-router-hash-link"

export default function HomeBanner() {
	return (
		<div className="home-banner container d-flex flex-wrap">
			<div className="home-banner__left">
                {/* <div> */}
				    <img src="./images/profile.png" alt="profile" className="z-index-1" />
                {/* </div> */}
			</div>
			<div className="home-banner__right">
				<strong>SEBASTIEN SANNER</strong>
				<span>Développeur web Javascript React / NodeJS</span>
				<p>
					“ Féru d’informatique, et également de sport, de voyage et bien d’autres, je suis de nature entreprenant et bienveillant.
					<br />
					Véritable couteau suisse de par mes multiples expériences, je suis un éternel apprenant. La programmation m’apporte ainsi ma dose de challenges et de réflexion. “
				</p>
				<HashLink to="#mesprojets">Mes projets</HashLink>
			</div>
		</div>
	)
}
