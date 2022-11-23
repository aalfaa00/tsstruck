import styles from './section.module.scss'

export const DescriptionSection = () => {
	return (
		<section className={styles.container} id='description'>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h4>HOW IT WORKS?</h4>
					<h3>Manager, Driver, Asset</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada fusce egestas blandit
						sed pretium. Amet suspendisse in sed adipiscing ipsum diam.
					</p>
				</div>
				<div className={styles.content}>
					<div className={styles.work}>
						<img src='/images/works.png' alt='Manager, Driver, Asset' title='HOW IT WORKS?' />
					</div>
					<div className={styles.mobilework}>
						<img
							src='/images/mobile-works.png'
							alt='Manager, Driver, Asset'
							title='HOW IT WORKS?'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
