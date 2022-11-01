import React, { useEffect } from 'react'
import styles from './Settings.module.css'
import i18n from '../../i18n'
import { useTranslation, Trans } from 'react-i18next'
import ThemeSwitcher from '../assets/ThemeSwitcher/ThemeSwitcher'

const Settings: React.FC = () => {
	const { t } = useTranslation()

	useEffect(() => {
		window.scrollTo({ behavior: 'smooth', top: 0 })
	}, [])

	const onChangeLanguage = (e: any) => {
		i18n.changeLanguage(e.target.value)
	}

	return (
		<div className={styles.main}>
			<div className={styles.selectLanguage}>
				<h1>
					<Trans t={t}>selectLanguage</Trans>:
				</h1>
				<h1>
					{i18n.language === 'en' ? (
						<span className={'fi fi-gb'}></span>
					) : (
						<span className={`fi fi-${i18n.language}`}></span>
					)}
				</h1>
				<select
					name='language'
					onChange={onChangeLanguage}
					value={i18n.language}
				>
					<option value='en'>English</option>
					<option value='ua'>Українська</option>
				</select>
			</div>
			<div className={styles.themeSwitcher}>
				<ThemeSwitcher />
			</div>
		</div>
	)
}

export default Settings
