// import { useState } from 'react'
// import NavContent from './NavContent'
// import { FaSpaceShuttle } from 'react-icons/fa';
// import './navbar.css'

// export default function NavBar() {
// 	const [showNav, setShowNav] = useState(false)
// 	const [rotateToggle, setRotateToggle] = useState(false)

// 	const handleClick = () => {
// 		setShowNav(!showNav)
// 		setRotateToggle(!rotateToggle)
// 	}
// 	return (
// 		<nav className='NavBar'>
// 			<div className='nav-item-toggle-div'>
// 				<div className='nav-toggle' onClick={handleClick}>
// 					<FaSpaceShuttle className={rotateToggle ? 'nav-toggle-icon rotate' : 'nav-toggle-icon'} />
// 				</div>
// 			</div>
// 			<NavContent onClick={handleClick} showNav={showNav} />
// 		</nav>
// 	)
// }


// <NavContent showNav={true} />
