import { motion } from "framer-motion"
import saturn from '../images/saturn.png'
import { Link } from 'react-router-dom'

export const revealVariants = {
	visible: { opacity: 1, pointerEvents: 'unset' },
	hidden: { opacity: 0, pointerEvents: 'none' }
}
export const rotateVariants = {
	normal: { transform: 'rotate(180deg)' },
	rotated: { transform: 'rotate(0)' }
}
export function Saturn() {
	return <motion.img animate={{ transform: ['scale(0)', 'scale(1.2)', 'scale(1)'] }} transition={{ ease: 'easeOut', times: [0, .3, .6], duration: 1.5, delay: 2 }} src={saturn} alt='saturn next to the site title' />
}
export function Header() {
	return (
		<motion.header animate={{ top: '0px' }} transition={{ ease: "easeOut", duration: 2 }}>
			<Link to='/' className='header'>
				<div className='header-div'>
					<div>
						<h1 className='site-heading'>just give me <span className='space'>SPACE</span></h1>
						<p className='site-sub'>A Website for <span className='nerds'>Space Nerds</span></p>
					</div>
				</div>
			</Link>
			<Saturn />
		</motion.header>
	)
}
export function Stars() {
	return <motion.div className='stars' animate={{ opacity: [null, 1, .3] }} transition={{ ease: "easeOut", duration: 4 }}></motion.div>
}

