import './apodmodal.css'
import { FaWindowClose } from "react-icons/fa";


export default function ApodModal(props) {
	console.log(props)

	if (!props.showModal) {
		return null
	} else {
		return (
			<div className='ApodModal center' >
				<nav className='close' onClick={props.handleClick}><FaWindowClose /></nav>
				<h1>{props.data.title}</h1>
				<img src={props.data.url} alt={props.data.title} />
				<p>{props.data.explanation}</p>
				<a href={props.data.hdurl} id='download' target="_blank" rel="noreferrer" >
					<h3>Download Hi-Def Version</h3>
				</a>
			</div>
		)
	}
}