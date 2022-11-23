import { IconArrowLeft } from '../icons/arrow-left'
import styles from './buttons.module.scss'
export const SliderButtons = ({ next, previous, ...rest }: any) => {
	const {
		carouselState: { currentSlide, slidesToShow, totalItems },
	} = rest

	return (
		<div className={`${styles.container} carousel-button-group`}>
			<button
				onClick={previous}
				className={currentSlide === 0 ? ` ${styles.prev} ${styles.disable}` : styles.prev}
				aria-label='Previous'
			>
				<IconArrowLeft />
			</button>
			<button
				onClick={next}
				className={
					currentSlide * slidesToShow > totalItems
						? ` ${styles.next} ${styles.disable}`
						: styles.next
				}
				aria-label='Next'
			>
				<IconArrowLeft />
			</button>
		</div>
	)
}
