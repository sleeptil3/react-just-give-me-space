export const navData = [
	{
		name: 'Home',
		path: '/',
		class: 'nav-item'
	},
	{
		name: 'SpaceX',
		path: '/spacex',
		class: 'nav-item'
	},
	{
		name: 'DarkSkies',
		path: '/darkskies',
		class: 'nav-item'
	},
	{
		name: 'APOD Gallery',
		path: '/apodgallery',
		class: 'nav-item'
	},
	{
		name: 'Film And TV',
		path: '/filmandtv',
		class: 'nav-item'
	},
]

export const films = ['contact', 'the martian', 'space odyssey 2001', 'interstellar', 'event horizon', 'Apollo 13', 'arrival', 'Deep impact', 'europa report', 'star wars', 'spaceballs', 'for all mankind']

let today = new Date();
export let [month, day, year] = new Date(today - 2592000000).toLocaleDateString("en-US").split("/")
if (day.length === 1) {
	day = '0' + day
}
if (month.length === 1) {
	month = '0' + month
}
export const start_date = `${year}-${month}-${day}`

export const dropDownData = [
	'Choose Content',
	'Company Info',
	'Upcoming Launches',
]

