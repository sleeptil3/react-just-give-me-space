import { useState } from 'react'
import CompanyInfo from '../../Components/SpaceX/CompanyInfo'
import UpcomingLaunches from '../../Components/SpaceX/UpcomingLaunches'
import { dropDownData } from '../../Data/GeneralData'
import { v4 as uuid } from 'uuid'
import falcon9 from '../../images/falcon9.png'
import './spacex.css'

export default function SpaceX() {
	const [showCompanyInfo, setShowCompanyInfo] = useState(false)
	const [showUpcomingLaunches, setUpcomingLaunches] = useState(false)

	const hideAll = () => {
		setShowCompanyInfo(false)
		setUpcomingLaunches(false)
	}

	const handleSelect = (e) => {
		console.log(e.target.options.selectedIndex)
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
	return (
		<div className='get-content'>
			<div>
				<h1>SpaceX</h1>
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
			<img src={falcon9} alt='falcon 9 dramatically entering screen simulating launch' className='falcon' />
			{showCompanyInfo ? <CompanyInfo /> : ''}
			{showUpcomingLaunches ? <UpcomingLaunches /> : ''}
		</div>
	)
}
