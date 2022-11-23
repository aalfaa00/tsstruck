import styles from './switch.module.scss'
import { ChangeEvent, useState } from 'react'
import { IconDiscountArrow } from '../icons/discount-arrow'

export const Switch = () => {
	const [checked, setChecked] = useState(false)

	const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked)
	}
	return (
		<div className={styles.container}>
			<div className={styles.wrap}>
				<span>Monthly</span>
				<label className={styles.switch}>
					<input type='checkbox' checked={checked} onChange={handleChecked} />
					<span className={`${styles.slider} round`} />
				</label>
				<span>Yearly</span>
			</div>
			{checked && (
				<div className={styles.discount}>
					<span>
						Save 65%
						<div>
							<IconDiscountArrow />
						</div>
					</span>
				</div>
			)}
		</div>
	)
}
