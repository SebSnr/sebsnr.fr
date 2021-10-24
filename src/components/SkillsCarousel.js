import React from "react"

export default function SkillsCarousel() {
	const slideWidth = 8

	const skills = [
		{
			player: {
				image: "./images/React.png",
			},
		},
		{
			player: {
				image: "./images/MySQL.png",
			},
		},
		{
			player: {
				image: "./images/MongoDB.png",
			},
		},
		{
			player: {
				image: "./images/Sass.png",
			},
		},
		{
			player: {
				image: "./images/Bootstrap.png",
			},
		},
		{
			player: {
				image: "./images/HTML-CSS.png",
			},
		},
		{
			player: {
				image: "./images/Sequelize.png",
			},
		},
		{
			player: {
				image: "./images/NodeJS.png",
			},
		},
		{
			player: {
				image: "./images/Git.png",
			},
		},
		{
			player: {
				image: "./images/VS.png",
			},
		},
	]

	const length = skills.length
	skills.push(...skills)

	// set carousel loop
	const sleep = (ms = 0) => {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	const createItem = (position, idx) => {
		const item = {
			styles: {
				transform: `translateX(${position * slideWidth}rem)`,
			},
			player: skills[idx].player,
		}

		switch (position) {
			case length - 1:
			case length + 1:
				break
			case length:
				break
			default:
				break
		}

		return item
	}

	const CarouselSlideItem = ({pos, idx, activeIdx}) => {
		const item = createItem(pos, idx, activeIdx)

		return (
			<li className="carousel__slide-item" style={item.styles}>
				<div className="carousel__slide-item-img-link">
					<img src={item.player.image} alt={item.player.title} />
				</div>
			</li>
		)
	}

	const keys = Array.from(Array(skills.length).keys())

	const [items, setItems] = React.useState(keys)
	const [isTicking, setIsTicking] = React.useState(false)
	const [activeIdx, setActiveIdx] = React.useState(0)
	const bigLength = items.length

	const prevClick = (jump = 1) => {
		if (!isTicking) {
			setIsTicking(true)
			setItems((prev) => {
				return prev.map((_, i) => prev[(i + jump) % bigLength])
			})
		}
	}

	const nextClick = (jump = 1) => {
		if (!isTicking) {
			setIsTicking(true)
			setItems((prev) => {
				return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength])
			})
		}
	}
	
	React.useEffect(() => {
		if (isTicking) sleep(300).then(() => setIsTicking(false))
	}, [isTicking])

	React.useEffect(() => {
		setActiveIdx((length - (items[0] % length)) % length)
	}, [items, length])

	return (
		<div className="carousel--skills">
			<div className="container carousel__wrap">
				<div className="carousel__inner" id="mescompetences">
					<button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
						<i className="carousel__btn-arrow carousel__btn-arrow--left" />
					</button>
					<div className="carousel__container">
						<ul className="carousel__slide-list">
							{items.map((pos, i) => (
								<CarouselSlideItem key={i} idx={i} pos={pos} activeIdx={activeIdx} />
							))}
						</ul>
					</div>
					<button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
						<i className="carousel__btn-arrow carousel__btn-arrow--right" />
					</button>
				</div>
			</div>
		</div>
	)
}
