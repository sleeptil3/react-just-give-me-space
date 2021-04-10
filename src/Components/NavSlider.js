import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../Data/GeneralData'
import { v4 as uuid } from 'uuid';
import { FaSpaceShuttle } from 'react-icons/fa';

export default function NavSlider() {

	const [slideInNav, setSlideInNav] = useState(false)
	const [opacityToggle, setOpacityToggle] = useState(false)
	const [rotateToggle, setRotateToggle] = useState(false)

	const handleClick = () => {
		setSlideInNav(!slideInNav)
		setRotateToggle(!rotateToggle)
	}

	useEffect(() => {
		setTimeout(() => setOpacityToggle(true), 3000)
	})

	return (
		<div className={opacityToggle ? 'NavSlider show' : 'NavSlider'}>
			<div onMouseEnter={handleClick} onMouseLeave={handleClick} className={slideInNav ? ' NavSlider-container slide-in' : 'NavSlider-container'}>
				<div className={rotateToggle ? 'nav-icon rotate' : 'nav-icon'}>
					<FaSpaceShuttle />
				</div>
				<ul className='nav-list'>
					{
						navData.map(item => {
							return (
								<Link key={uuid()} to={item.path}>
									<li className={item.class}>
										{item.name}
									</li>
								</Link>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
}

