import { listServices } from './constants'
import styles from './section.module.scss'
import { Switch } from '../../components/switch'
import { PriceCard } from '../../components/price-card'

export const PriceSection = () => {
	return (
		<section className={styles.container} id='price'>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h3>Ready to Get Started?</h3>
					<p>Choose a plan that suits your business needs</p>
					<div>
						<Switch />
					</div>
				</div>
				<div className={styles.cardscontainer}>
					{listServices.map((value, index) => (
						<PriceCard key={index} value={value} />
					))}
				</div>
			</div>
		</section>
	)
}
