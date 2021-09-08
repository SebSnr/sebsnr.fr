import React from "react"
import {Link} from "react-router-dom"

export default function HomeContent() {
	return (
		<div className="home-content">
			<div className="home-content__left">
				<img src="./images/Groupomania-mock-up.png" alt="Groupomania" />
			</div>
			<div className="home-content__right">
				<h3>Groupomania</h3>
				<div className="home-content__right__goal">
					Créer un mini-réseau social
				</div>
				<p>
					🖥️ Sass, Bootstrap, React ⚛️ <br />
					🗃️ NodeJs, Express, Sequelize, MySQL
					{/* <br />
					Création de la maquette, développement du site, création de l'API Rest et de la base de données, sécurisation des données, validation des tests unitaires, mise en ligne */}
				</p>
                <ul>
                    <li>
                        création de la maquette
                    </li>
                    <li>
                        développement du site
                    </li>
                    <li>
                        création de l'API Rest 
                    </li>
                    <li>
                        création de la base de données
                    </li>
                    <li>
                        sécurisation des données
                    </li>
                    <li>
                        validation des tests unitaires 
                    </li>
                    <li>
                        mise en ligne
                    </li>
                </ul>
				<Link to={{pathname: "https://www.linkedin.com/in/sebastiensanner/"}} target="_blank" className="btn btn--1">
					Découvrir
				</Link>
			</div>
		</div>
	)
}
