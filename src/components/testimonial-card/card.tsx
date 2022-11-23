import Image from 'next/image'
import styles from './card.module.scss'

interface CardTypes {
	value: {
		image: string
		username: string
		company: string
		title: string
		feedback: string
	}
}

export const TestimonialCard = ({ value }: CardTypes) => {
	return (
		<div className={`${styles.container} keen-slider__slide`}>
			<div className={styles.wrapper}>
				<h6>{value.title}</h6>
				<p>{value.feedback}</p>
			</div>
			<div className={styles.wrapuser}>
				<div className={styles.wrapimage}>
					<Image width='100%' height='100%' title='user' alt='user.png' src={value.image} />
				</div>
				<div className={styles.user}>
					<h3>{value.username}</h3>
					<h4>{value.company}</h4>
				</div>
			</div>
		</div>
	)
}
