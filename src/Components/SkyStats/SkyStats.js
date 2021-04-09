import loading from '../../images/loading.gif'
import './skystats.css'

export default function SkyStats({ lat, long, renderSkyStats, skyData }) {

	if (!renderSkyStats) {
		return <img className='loading' src={loading} alt='Loading Website...' />
	} else {
		return (
			<div className='conditions fadeIn'>
				<div>
					<div>
						<h3>Your Location</h3>
						<h4>Latitude: {lat.toFixed(2)}</h4>
						<h4>Longitude: {long.toFixed(2)}</h4>a
					</div>
					<div>
						<h3>AstroConditions</h3>
						<h4>Seeing <span className='light'>(lower is better)</span>: {skyData.seeing}</h4>
						<h4>Atmosphere Transparency <span className='light'>(lower is better)</span>: {skyData.transparency}</h4>
					</div>
				</div>
				<img className='fadeIn' src={`http://www.7timer.info/bin/astro.php?lon=${long}&lat=${lat}ac=0&lang=en&unit=british&output=internal&tzshift=0`} alt='png graphic showing astro conditions in detail' />
			</div>
		)
	}
}