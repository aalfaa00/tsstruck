import styles from './card.module.scss'
import { IconTickCircle } from '../icons/tick-circle'
import { IconCloseCircle } from '../icons/close-circle'

interface CardTypes {
	value: {
		title: string
		isPopular: boolean
		Icon: () => JSX.Element
		price: number
		suggestion: string
		description: string
		startButton: string
		serviceList: {
			isInclude: boolean
			title: string
		}[]
	}
}

export const PriceCard = ({ value }: CardTypes) => {
	const { title, Icon, price, isPopular, suggestion, description, startButton, serviceList } = value
	return (
		<div className={styles.container}>
			<div className={styles.wrap}>
				<div className={styles.wrapper}>
					<div className={styles.title}>
						<div>
							<Icon />
						</div>
						<span>{title}</span>
					</div>
					{isPopular && (
						<div className={styles.popular}>
							<span>Popular</span>
						</div>
					)}
				</div>
				<div className={styles.suggestion}>{suggestion}</div>
				<div className={styles.price}>
					<h6>${price}</h6>
					<span>/month</span>
				</div>
				<div className={styles.description}>{description}</div>
				<ul className={styles.list}>
					{serviceList.map(({ title, isInclude }, index) => (
						<li key={index}>
							<div>{isInclude ? <IconTickCircle /> : <IconCloseCircle />}</div>
							<span>{title}</span>
						</li>
					))}
				</ul>
			</div>
			<button className={styles.startButton}>{startButton}</button>
		</div>
	)
}
