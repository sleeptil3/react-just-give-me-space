import { useState, useEffect } from 'react'
import { motion } from "framer-motion"


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
			<motion.div animate={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }} className='CompanyInfo'>
				<h1>Company Info</h1>
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
			</motion.div>
		)
	} else {
		return <h2>Loading</h2>
	}
}
