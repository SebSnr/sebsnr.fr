import React from 'react'

export default function References() {
    return (    
        <div className="references">
            <div className="container">
				<h4>
					Références <i class="fab fa-circle fa-linkedin"></i>
				</h4>
				<div className="item-references">
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
                <div className="item-references">
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
            </div>
        </div>
    )
}
