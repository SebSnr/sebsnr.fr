import React from "react"
import {Link} from "react-router-dom"

export default function HomeContent() {
	return (
		<div className="home-container">
			{/* Groupoamania */}
			<div className="home-content">
				<div className="home-content__left home-content__left--big">
					<img src="./images/Groupomania-mock-up.png" alt="Groupomania" />
				</div>
				<div className="home-content__right home-content__right--big">
					<h3>Groupomania</h3>
					<div className="home-content__right__goal">Créer un réseau social</div>
					<p>
						🖥️ Sass, Bootstrap, React ⚛️ <br />
						🗃️ NodeJs, Express, Sequelize, MySQL
						{/* <br />
					Création de la maquette, développement du site, création de l'API Rest et de la base de données, sécurisation des données, validation des tests unitaires, mise en ligne */}
					</p>
					<ol>
						<li>création de la maquette</li>
						<li>développement du site</li>
						<li>création de l'API Rest</li>
						<li>création de la base de données</li>
						<li>sécurisation des données</li>
						<li>validation des tests unitaires</li>
						<li>mise en ligne</li>
					</ol>
					<Link to={{pathname: "https://www.linkedin.com/in/sebastiensanner/"}} target="_blank" className="btn btn--1">
						Découvrir
					</Link>
				</div>
			</div>
			{/* Orinoco */}
			<div className="home-content home-content--reverse">
				<div className="home-content__right">
					<h3>Orinoco</h3>
					<div className="home-content__right__goal">Développer le front-end d'un site e-commerce</div>
					<p>🖥️ HTML, CSS, SASS, JavaScript</p>
					<ol>
						<li>développement du site</li>
						<li>envoi des requêtes via l'API</li>
						<li>ajout/suppression/modification du panier</li>
						<li>confirmation de la commande</li>
					</ol>
					<Link to={{pathname: "https://github.com/SebSnr/P5--Orinoco"}} target="_blank" className="btn btn--1">
							
						Découvrir <i class="fab fa-github"></i>
					</Link>
				</div>
				<div className="home-content__left">
					<img src="./images/Orinoco-mock-up.png" alt="Orinoco" />
				</div>
			</div>
            {/* OhMyfood */}
			<div className="home-content">
				<div className="home-content__left home-content__left--big">
					<img src="./images/Ohmyfood-mock-up.png" alt="Ohmyfood" />
				</div>
				<div className="home-content__right home-content__right--big">
					<h3>Ohmyfood</h3>
					<div className="home-content__right__goal">Dynamiser avec des animations CSS</div>
					<p>
						🖥️ HTML, CSS, SASS, animations<br />
					</p>
					<ol>
						<li>intégration de la maquette</li>
						<li>création des différentes animations css</li>
						<li>custom des favoris, affichage des menus, sélection des plats, loading-page, </li>
					</ol>
					<Link to={{pathname: "https://sebsnr.github.io/P3--Ohmyfood/index.html"}} target="_blank" className="btn btn--1">
						Découvrir
					</Link>
				</div>
			</div>
        </div>
	)
}
