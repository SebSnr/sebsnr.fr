import React from "react"
import {Link} from "react-router-dom"

export default function HomeContent() {
	return (
		<div className="home-container" id="mesprojets">
			{/* Groupoamania */}
			<div className="home-content">
				<div className="home-content__left home-content__left--big">
					<img src="./images/Groupomania-mock-up.png" alt="Groupomania" />
				</div>
				<div className="home-content__right home-content__right--big">
					<h3>Groupomania</h3>
					<div className="home-content__right__goal">Créer un réseau social</div>
					<p>
						Sass, Bootstrap, React ⚛️ <br />
						NodeJs, Express, Sequelize, MySQL
						{/* <br />
					Création de la maquette, développement du site, création de l'API Rest et de la base de données, sécurisation des données, validation des tests unitaires, mise en ligne */}
					</p>
					<ol>
						<li>création de la maquette</li>
						<li>développement du site en mobile-first</li>
						<li>création de l'API Rest</li>
						<li>création de la base de données</li>
						<li>sécurisation des données</li>
						<li>validation des tests unitaires</li>
						<li>mise en ligne</li>
					</ol>
					<Link to={{pathname: "http://groupomani.sebsnr.fr/login"}} target="_blank" className="btn btn--1">
						Découvrir
					</Link>
				</div>
			</div>
			{/* Orinoco */}
			<div className="home-content home-content--reverse">
				<div className="home-content__right">
					<div>
						<h3>Orinoco</h3>
						<div className="home-content__right__goal">Développer le front-end d'un site e-commerce</div>
						<p>HTML, CSS, SASS, JavaScript</p>
						<ol>
							<li>développement du site</li>
							<li>envoi des requêtes via l'API</li>
							<li>ajout/suppression/modification du panier</li>
							<li>personnalisation UX grâce au local storage</li>
							<li>interface responsive</li>
						</ol>
						<Link to={{pathname: "https://github.com/SebSnr/P5--Orinoco"}} target="_blank" className="btn btn--1">
							Découvrir <i class="fab fa-github"></i>
						</Link>
					</div>
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
					<div className="home-content__right__goal">Développer et dynamiser un site gastronomique </div>
					<p>HTML, CSS, SASS, animations</p>
					<ol>
						<li>intégration de la maquette</li>
						<li>création des différentes animations css</li>
						<li>custom des favoris, affichage des menus, sélection des plats, loading-page</li>
					</ol>
					<Link to={{pathname: "https://sebsnr.github.io/P3--Ohmyfood/index.html"}} target="_blank" className="btn btn--1">
						Découvrir
					</Link>
				</div>
			</div>

			{/* Reservia */}

			<div className="home-content home-content--reverse">
				<div className="home-content__right">
					<div>
						<h3>Reservia</h3>
						<div className="home-content__right__goal">Développer le front-end d'un site de réservation</div>
						<p>HTML, CSS</p>
						<ol>
							<li>intégration et développement du site</li>
							<li>aucune erreur au validateur W3C HTML et CSS</li>
							<li>interface responsive</li>
							<li>compatible avec les dernières versions de Chrome et Firefox</li>
							<li>versionning du projet avec Github</li>
						</ol>
						<Link to={{pathname: "https://sebsnr.github.io/P2--Reservia"}} target="_blank" className="btn btn--1">
							Découvrir
						</Link>
					</div>
				</div>
				<div className="home-content__left">
					<img src="./images/Reservia-mock-up.png" alt="Reservia" />
				</div>
			</div>

			{/* La chouette agence */}
			<div className="home-content">
				<div className="home-content__left">
					<img src="./images/Chouette-mock-up.png" alt="La chouette agence" />
				</div>
				<div className="home-content__right">
					<h3>La chouette agence</h3>
					<div className="home-content__right__goal">Optimiser le SEO et l'accessibilité</div>
					<ol>
						<li>audit du site web</li>
						<li>rapport d'optimisation</li>
						<li>mise en application des améliorations</li>
						<li>interface responsive</li>
						<li>site plus rapide et mieux référencé</li>
						<li>site avec une meilleure accessibilité</li>
					</ol>
					<Link to={{pathname: "https://sebsnr.github.io/P4--La_chouette_agence/index.html"}} target="_blank" className="btn btn--1">
						Découvrir
					</Link>
				</div>
			</div>
		</div>
	)
}
