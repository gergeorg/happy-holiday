import React from "react"
import Container from "../Container/Container"

import style from "./Footer.module.css"

const Footer = () => {
	return (
		<footer>
			<Container>
				<div className={style.wrapper}>
					<div className={style.contacts}>
						<p>
							Design: <a href='https://t.me/Mrshmallowww'>Anastasia Ilina</a>
						</p>
						<p>
							Сoder: <a href='https://t.me/gergeorg'>Georgey Gerasimov</a>
						</p>
						<p>© HBCard, 2022</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
