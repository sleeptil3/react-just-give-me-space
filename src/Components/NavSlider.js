import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../Data/GeneralData'
import { rotateVariants } from '../Components/Elements'
import { v4 as uuid } from 'uuid'
import { FaSpaceShuttle } from 'react-icons/fa'
import { motion, useAnimation } from "framer-motion"

export default function NavSlider() {

	const [rotateToggle, setRotateToggle] = useState(false)
	const controls = useAnimation()

	useEffect(() => {
		console.log(rotateToggle)
	}, [rotateToggle])

	return (
		<motion.div
			className='NavSlider'
			animate={{ right: [null, '-550px', '-480px', '-550px'] }}
			transition={{ ease: `easeOut`, duration: 2, times: [0, .6, .7, 1], delay: 3.5 }}
		>
			<motion.div
				className='NavSlider-container'
				whileHover={{ right: '550px' }}
				transition={{ ease: `easeOut`, duration: .2 }}
				onHoverStart={() => controls.start({ transform: 'rotate(0deg)' })}
				onHoverEnd={() => controls.start({ transform: 'rotate(180deg)' })}
			>
				<motion.div className='nav-icon'
					animate={controls}
					transition={{ duration: 1, delay: .6 }}
					initial={{ transform: 'rotate(180deg)' }}
				>
					<FaSpaceShuttle />
				</motion.div>
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
			</motion.div>
		</motion.div >
	)
}

