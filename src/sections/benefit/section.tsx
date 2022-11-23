import Image from 'next/image'
import { list } from './constants'
import styles from './section.module.scss'

export const BenefitSection = () => {
	return (
		<section className={styles.container} id='benefit'>
			<div>
				<h4>WHY USE TSS</h4>
				<div className={styles.header}>
					<h3>Easy, Simple, Affordable</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sit donec nunc, arcu.
						Habitasse eleifend sed malesuada malesuada egestas viverra egestas magna.
					</p>
				</div>
				<div className={styles.content}>
					{list.map(({ image, title, description }, index) => (
						<div key={index} className={styles.card}>
							<div>
								<img src={image} alt={title} title={title} />
							</div>

							<h2>{title}</h2>
							<p>{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
