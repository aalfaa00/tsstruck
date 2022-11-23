import Link from 'next/link'
import { useMenu } from './useMenu'
import styles from './menu.module.scss'
import { IconMenu } from '../icons/menu'
import { navlist } from '../../constants'
import { IconClose } from '../icons/close'

export const Menu = () => {
	const { ref, open, handleClick } = useMenu()

	return (
		<>
			<div className={styles.container} onClick={handleClick}>
				<IconMenu />
			</div>
			<div className={open ? `${styles.sidebar} ${styles.transform}` : styles.sidebar} ref={ref}>
				<div className={styles.side}>
					<div className={styles.wrapclose}>
						<div onClick={handleClick}>
							<IconClose />
						</div>
					</div>
					<ul>
						{navlist.map(({ href, title }, index) => (
							<li key={index} onClick={handleClick}>
								<Link aria-label={title} href={href}>
									<a>{title}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
