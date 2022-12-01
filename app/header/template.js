{
	const country = document.getElementsByClassName('js__lang')[0]
	if (country) {
		const country_link =
			country.getElementsByClassName('js__lang-link')[0]

		const change_active_status = () => {
			event.preventDefault()
			country.classList.toggle('h--active')
		}

		country_link.addEventListener('click', change_active_status)
	}
}
