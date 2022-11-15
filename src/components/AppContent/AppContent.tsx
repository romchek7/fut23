import React, { useEffect, memo } from 'react'
import styles from './AppContent.module.css'
import teamPhoto from '../../assets/img/team.jpg'
import leaguesPhoto from '../../assets/img/leagues.jpg'
import playersPhoto from '../../assets/img/players.jpg'
import bookmakersPhoto from '../../assets/img/bookmakers.jpg'
import marketsPhoto from '../../assets/img/markets.jpg'
import venuesPhoto from '../../assets/img/venues.jpg'
import refereesPhoto from '../../assets/img/referee.jpg'
import { Link } from 'react-router-dom'
import NewsColumn from './NewsColumn/NewsColumn'
import { useTranslation, Trans } from 'react-i18next'
import {
	players,
	leagues,
	markets,
	bookmakers,
	referees,
	teams,
	venues,
} from '../assets/Links/Links'

interface LinkBoxProps {
	text: string
	imageSRC: string
	pathTo: string
}

const LinkBox: React.FC<LinkBoxProps> = memo(({ text, imageSRC, pathTo }) => {
	const { t } = useTranslation()

	return (
		<Link to={pathTo}>
			<div className={styles.linkBox}>
				<div>
					<p>
						<Trans t={t}>{text}</Trans>
					</p>
				</div>
				<img alt={text} src={imageSRC} />
			</div>
		</Link>
	)
})

const AppContent: React.FC = () => {
	const { t } = useTranslation()

	useEffect(() => {
		window.scrollTo({ behavior: 'smooth', top: 0 })
	}, [])

	return (
		<div className={styles.main}>
			<div className={styles.photoHeader}>
				<div className={styles.photoBlock}>
					<div className={styles.photoBlockInfo}>
						<div className={styles.photoBlockText}>
							<h1>
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								<Trans t={t}>petProject</Trans>: "FUT 23"
							</h1>
							<p>
								API:{' '}
								<a
									href='https://sportdataapi.com'
									target='_blank'
									rel='noreferrer'
								>
									sportdataapi.com
								</a>
							</p>
						</div>
						<div className={styles.swimTextBlock}>
							<NewsColumn />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.contentWrapper}>
					<LinkBox
						text={'Leagues'}
						imageSRC={leaguesPhoto}
						pathTo={leagues}
					/>
					<LinkBox
						text={'Teams'}
						imageSRC={teamPhoto}
						pathTo={teams}
					/>
					<LinkBox
						text={'Players'}
						imageSRC={playersPhoto}
						pathTo={players}
					/>
					<LinkBox
						text={'Bookmakers'}
						imageSRC={bookmakersPhoto}
						pathTo={bookmakers}
					/>
					<LinkBox
						text={'Markets'}
						imageSRC={marketsPhoto}
						pathTo={markets}
					/>
					<LinkBox
						text={'Venues'}
						imageSRC={venuesPhoto}
						pathTo={venues}
					/>
					<LinkBox
						text={'Referees'}
						imageSRC={refereesPhoto}
						pathTo={referees}
					/>
				</div>
			</div>
		</div>
	)
}

export default AppContent
