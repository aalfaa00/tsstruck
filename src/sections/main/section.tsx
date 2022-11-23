import Link from 'next/link'
import styles from './section.module.scss'
import { Menu } from '../../components/menu'
import { NavBar } from '../../components/navbar'
import { IconLogoGray } from '../../components/icons/logo-gray'
import Image from 'next/image'
import bg from '../../../public/images/bg.webp'
import mobilebg from '../../../public/images/mobile-bg.png'
import planshet from '../../../public/images/planshet.webp'

export const MainSection = () => {
	return (
		<main className={styles.container}>
			<header className={styles.header}>
				<Link href='/'>
					<a className={styles.logo}>
						<IconLogoGray />
						<h3>TruckTrip</h3>
					</a>
				</Link>
				<NavBar />
				<Menu />
			</header>
			<div className={styles.contentContainer}>
				<div className={styles.content}>
					<div className={styles.wrapcontent}>
						<h2>
							<div className={styles.hyphen} />
							SAAS PRODUCT
						</h2>
						<h1>Trailer security system is a solution</h1>
						<p>Most reliable tracking experience, helping your company to grow and reduce costs.</p>
					</div>
					<div className={styles.wrapButtons}>
						<button className={styles.demo}>Get a Free Demo</button>
						<Link href='#price'>
							<a className={styles.price}>See Pricing</a>
						</Link>
					</div>
					<div className={styles.mobileplanshet}>
						<Image
							priority
							src={planshet}
							layout='fill'
							alt='something'
							placeholder='blur'
							sizes='100%,100%'
						/>
					</div>
				</div>
			</div>
			<div className={styles.bg}>
				<Image
					priority
					src={bg}
					layout='fill'
					alt='something'
					placeholder='blur'
					sizes='100%,100%'
				/>
			</div>
			<div className={styles.mobilebg}>
				<Image
					priority
					src={mobilebg}
					layout='fill'
					alt='something'
					placeholder='blur'
					sizes='100%,100%'
				/>
			</div>
			<div className={styles.planshet}>
				<Image
					priority
					src={planshet}
					layout='fill'
					alt='something'
					placeholder='blur'
					sizes='100%,100%'
				/>
			</div>
		</main>
	)
}
