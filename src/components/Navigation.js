import React from "react"
import {NavLink} from "react-router-dom"


export default function Navigation() {
	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					{/* <a className="navbar-brand" href="index.html">
						SEB.S
					</a>
                     */}
                    <NavLink className="navbar-brand" to="/" title="Retour accueil">
                        SEB.S
					</NavLink>
				
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" title="Toggle navigation">
						<span className="fa fa-bars"></span>
					</button>
					<div className="collapse navbar-collapse flex-grow-0" id="ftco-nav">
						<ul className="navbar-nav ml-auto mr-md-3">
							<li className="nav-item active">
                                 <NavLink className="nav-link" to="/">
									Accueil
								</NavLink>
							</li>
                            <li className="nav-item">
                                 <NavLink className="nav-link" to="/">
									Compétences
								</NavLink>
							</li>
                            <li className="nav-item">
                                 <NavLink className="nav-link" to="/">
									Projets
								</NavLink>
							</li>
                            <li className="nav-item nav-item--contact">
                                 <NavLink className="nav-link" to="/">
									Contact
								</NavLink>
							</li>
							{/* <li className="nav-item">
								<a href="#" className="nav-link">
									About
								</a>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}











	{/* <div className="social-media order-lg-last">
							<p className="mb-0 d-flex">
								<a href="#" className="d-flex align-items-center justify-content-center">
									<span className="fa fa-facebook">
										<i className="sr-only">Facebook</i>
									</span>
								</a>
								<a href="#" className="d-flex align-items-center justify-content-center">
									<span className="fa fa-twitter">
										<i className="sr-only">Twitter</i>
									</span>
								</a>
								<a href="#" className="d-flex align-items-center justify-content-center">
									<span className="fa fa-instagram">
										<i className="sr-only">Instagram</i>
									</span>
								</a>
								<a href="#" className="d-flex align-items-center justify-content-center">
									<span className="fa fa-dribbble">
										<i className="sr-only">Dribbble</i>
									</span>
								</a>
							</p>
						</div> */}