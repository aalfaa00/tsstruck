import { IconUber } from '../icons/uber'
import { IconSlack } from '../icons/slack'
import { IconAirbnb } from '../icons/airbnb'
import { IconGoogle } from '../icons/google'
import { IconNetflix } from '../icons/netflix'
import styles from './partners.module.scss'

export const Partners = () => {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<IconSlack />
				</li>
				<li>
					<IconNetflix />
				</li>
				<li>
					<IconGoogle />
				</li>
				<li>
					<IconAirbnb />
				</li>
				<li>
					<IconUber />
				</li>
			</ul>
		</div>
	)
}
