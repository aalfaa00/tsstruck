import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import styles from './section.module.scss'
import { testimonials } from './constants'
import { useKeenSlider } from 'keen-slider/react'
import { IconArrowLeft } from '../../components/icons/arrow-left'
import { TestimonialCard } from '../../components/testimonial-card'

export const TestimonialsSection = () => {
	const [loaded, setLoaded] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		loop: true,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		slides: {
			perView: 1,
			spacing: 15,
		},
		created() {
			setLoaded(true)
		},
		breakpoints: {
			'(min-width: 650px)': {
				slides: {
					perView: 2,
					spacing: 15,
				},
			},
			'(min-width: 1200px) ': {
				slides: {
					perView: 3,
					spacing: 24,
				},
			},
		},
	})

	return (
		<section className={styles.container} id='testimonials'>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h4>WHAT THEY SAY</h4>
					<h3>Our User Kind Words</h3>
					<p>
						Here are some testimonials from our user after using TSS to manage their business
						expenses.
					</p>
				</div>
				<div ref={sliderRef} className='keen-slider'>
					{testimonials.map((value, index) => (
						<TestimonialCard key={index} value={value} />
					))}
				</div>
				<div>
					{loaded && instanceRef.current && (
						<div>
							<div className={styles.containerbuttons}>
								<button
									onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
									className={currentSlide === 0 ? ` ${styles.prev} ${styles.disable}` : styles.prev}
								>
									<IconArrowLeft />
								</button>
								<button
									onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
									className={styles.next}
								>
									<IconArrowLeft />
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
