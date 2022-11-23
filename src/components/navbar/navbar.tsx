import Link from 'next/link'
import { navlist } from '../../constants'
import styles from './navbar.module.scss'

export const NavBar = () => {
	return (
		<div className={styles.container}>
			<nav>
				<ul>
					{navlist.map(({ href, title }, index) => (
						<li key={index}>
							<Link aria-label={title} href={href}>
								<a>{title}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<button className={styles.button}>Get Demo</button>
		</div>
	)
}
