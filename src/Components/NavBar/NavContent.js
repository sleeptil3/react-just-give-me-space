import { Link } from 'react-router-dom'
import { navData } from '../../Data/GeneralData'
import headerBkg from '../../images/header-bkg.jpeg'
import { v4 as uuid } from 'uuid';


export default function NavContent({ handleClick, showNav }) {

	return (
		<ul style={{ backgroundImage: `url(${headerBkg})` }} onClick={handleClick} className={showNav ? "nav-items show" : "nav-items"}>
			{
				navData.map(item => {
					return (
						<Link key={uuid()} to={item.path}>
							<li className={item.class}>
								<span>{item.name}</span>
							</li>
						</Link>
					)
				})
			}
		</ul>
	)
}

