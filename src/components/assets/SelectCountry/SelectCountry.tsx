import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import styles from './SelectCountry.module.css'

const SelectCountry: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.SelectCountry}>
			<p>
				<Trans t={t}>Select country</Trans>
			</p>
		</div>
	)
}

export default SelectCountry
