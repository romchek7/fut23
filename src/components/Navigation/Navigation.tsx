import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import { MenuOutlined, CloseOutlined, SettingOutlined } from '@ant-design/icons'
import { Trans, useTranslation } from 'react-i18next'

interface ILinkNavigationProps {
	toPath: string
	text: string
	setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const LinkNavigation: React.FC<ILinkNavigationProps> = ({
	toPath,
	text,
	setShowMenu,
}) => {
	const { t } = useTranslation()

	const onClickSetShowMenu = () => {
		setShowMenu(false)
	}

	return (
		<Link to={toPath} onClick={onClickSetShowMenu}>
			<div className={styles.navLinkText}>
				<Trans t={t}>{text}</Trans>
			</div>
		</Link>
	)
}

const Navigation: React.FC = () => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<>
			<div
				className={styles.menuBtn}
				onClick={() => setShowMenu((prevState) => !prevState)}
			>
				{showMenu ? <CloseOutlined /> : <MenuOutlined />}
			</div>
			<nav className={showMenu ? styles.navMobile : styles.nav}>
				<LinkNavigation
					toPath={'/fut23'}
					text='Home'
					setShowMenu={setShowMenu}
				/>
				<LinkNavigation
					toPath={'/leagues'}
					text='Leagues'
					setShowMenu={setShowMenu}
				/>
				<LinkNavigation
					toPath={'/teams'}
					text='Teams'
					setShowMenu={setShowMenu}
				/>
				<LinkNavigation
					toPath={'/players'}
					text='Players'
					setShowMenu={setShowMenu}
				/>
				<LinkNavigation
					toPath={'/bookmakers'}
					text='Bookmakers'
					setShowMenu={setShowMenu}
				/>
				<LinkNavigation
					toPath={'/markets'}
					text='Markets'
					setShowMenu={setShowMenu}
				/>
				<LinkNavigation
					toPath={'/referees'}
					text='Referees'
					setShowMenu={setShowMenu}
				/>
				<LinkNavigation
					toPath={'/venues'}
					text='Venues'
					setShowMenu={setShowMenu}
				/>
				<Link
					to={'/settings'}
					className={styles.settings}
					onClick={() => setShowMenu(false)}
				>
					<SettingOutlined />
				</Link>
			</nav>
		</>
	)
}

export default Navigation
