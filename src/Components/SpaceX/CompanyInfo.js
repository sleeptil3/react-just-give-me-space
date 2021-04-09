import { useState, useEffect } from 'react'

export default function CompanyInfo() {
	const [companyInfo, setCompanyInfo] = useState()
	const makeApiCall = async () => {
		try {
			const res = await fetch(`https://api.spacexdata.com/v4/company`)
			const data = await res.json()
			setCompanyInfo(data)
		} catch (err) {
			alert(err)
		}
	}
	useEffect(() => {
		makeApiCall()
	}, [])

	if (companyInfo !== undefined) {
		return (
			<div className='CompanyInfo fadeIn'>
				<h1>Company Info</h1>
				<h2>Video</h2>
				<div className='youtube'>
					<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/A0FZIwabctw?start=48" title="YouTube video player" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<h2>Summary</h2>
				<p>{companyInfo.summary}</p>
				<h2>Links</h2>
				<p><a href={companyInfo.links.website}><b>SpaceX Website</b></a></p>
				<p><a href={companyInfo.links.elon_twitter}><b>Elon's Twitter</b></a></p>
				<p><a href={companyInfo.links.twitter}><b>SpaceX' Twitter</b></a></p>
				<h2>Stats</h2>
				<p><span className='info-field'>Founded: </span>{companyInfo.founded}</p>
				<p><span className='info-field'>CEO: </span>{companyInfo.ceo}</p>
				<p><span className='info-field'>COO: </span>{companyInfo.coo}</p>
				<p><span className='info-field'>CTO: </span>{companyInfo.cto}</p>
				<p><span className='info-field'>CTO of Propulsion: </span>{companyInfo.cto_propulsion}</p>
				<p><span className='info-field'>Number of Employees: </span>{companyInfo.employees}</p>
			</div>
		)
	} else {
		return <h2>Loading</h2>
	}
}
