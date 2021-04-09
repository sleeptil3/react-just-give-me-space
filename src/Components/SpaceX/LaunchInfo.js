import spaceXBadge from '../../images/spacex.png'

export default function LaunchInfo({ data }) {
	if (data !== undefined) {
		// const currentDate = new Date();
		const launchDate = new Date(data.date_local)
		const parseDate = () => {
			const dateString = `${launchDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}`
			return dateString
		}

		// if (launchDate > currentDate) {
		if (launchDate) {
			console.log(data)
			return (
				<div className='launch-div fadeIn'>
					{data.links.patch.small ? <img className='patch' src={data.links.patch.small} alt={`patch for mission ${data.name}`} /> : <img className='patch' src={spaceXBadge} alt={`spaceX logo substitute for missing mission patch`} />}
					<div className='launch-info'>
						<h2>{data.name}</h2>
						<p><span className='info-field'>Flight Number</span>: {data.flight_number}</p>
						<p><span className='info-field'>Expected Launch Date</span>: {parseDate()}</p>
						{data.links.wikipedia ? <p><span className='info-field'>WikiPage</span>: <a href={data.links.wikipedia}>{data.links.wikipedia}</a></p> : ''}
					</div>
				</div>
			)
		} else {
			return ''
		}
	} else {
		return <h2>Loading</h2>
	}

}
