import React from 'react'
import styles from './Preloader.module.css'
import { LoadingOutlined } from '@ant-design/icons'

const Preloader: React.FC = () => {
	return (
		<div className={styles.main}>
			<LoadingOutlined />
		</div>
	)
}

export default Preloader
