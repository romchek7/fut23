import { ChangeEventHandler } from 'react'
import { getThemesModes } from '../../../redux/types/themeModeTypes'

const setThemeMode = (mode: string) => {
	localStorage.setItem('theme', mode)
	document.documentElement.setAttribute('data-theme', mode)
}

const setDarkMode = () => {
	setThemeMode(getThemesModes.DARK_THEME)
}

const setLightMode = () => {
	setThemeMode(getThemesModes.LIGHT_THEME)
}

if (localStorage.getItem('theme') === getThemesModes.DARK_THEME) {
	setDarkMode()
} else {
	setLightMode()
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
	if (e.target.checked) {
		setDarkMode()
	} else {
		setLightMode()
	}
}

export default toggleTheme
