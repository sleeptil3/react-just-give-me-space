import { useState, useEffect } from 'react'
import CompanyInfo from '../Components/SpaceX/CompanyInfo'
import UpcomingLaunches from '../Components/SpaceX/UpcomingLaunches'
import { dropDownData } from '../Data/GeneralData'
import { v4 as uuid } from 'uuid'
import { motion } from "framer-motion"
import falcon9 from '../images/falcon9.png'

export default function SpaceX() {
	const [showCompanyInfo, setShowCompanyInfo] = useState(false)
	const [showUpcomingLaunches, setUpcomingLaunches] = useState(false)

	const hideAll = () => {
		setShowCompanyInfo(false)
		setUpcomingLaunches(false)
	}

	const handleSelect = (e) => {
		hideAll()
		switch (e.target.options.selectedIndex) {
			case 0: break
			case 1: {
				setShowCompanyInfo(true)
				break
			}
			case 2: {
				setUpcomingLaunches(true)
				break
			}
			default: break
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<motion.div animate={{ opacity: 1 }} transition={{ duration: 1 }} className='SpaceX'>
			<div>
				<h1>SpaceX</h1>
				<div className='youtube'>
					<iframe src="https://www.youtube-nocookie.com/embed/A0FZIwabctw?start=48" title="YouTube video player" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
				</div>
				<p className='get-content-p'>SpaceX currently leads the world in private space exploration and they are a constant inspiration to me. Here, you'll find info on upcoming launches as well as details on their program.</p>
			</div>
			<div>
				<label for="pages"><p className='get-content-p'>Select information to view:</p></label>
				<select onChange={handleSelect} name="selectedPage" id="pages">
					{dropDownData.map(item => {
						return <option key={uuid()}>{item}</option>
					})}
				</select>
			</div>
			{showCompanyInfo ? <CompanyInfo /> : ''}
			{showUpcomingLaunches ? <UpcomingLaunches /> : ''}
			<div className='falcon-div'>
				<img src={falcon9} alt='falcon 9 dramatically entering screen simulating launch' className='falcon' />
			</div>
		</motion.div>
	)
}
