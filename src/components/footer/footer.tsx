import Link from 'next/link'
import { IconLogo } from '../icons/logo'
import styles from './footer.module.scss'
import { IconMark } from '../icons/mark'
import { IconEmail } from '../icons/email'
import { IconPhone } from '../icons/phone'
import { social, support, company, product } from './constants'

export const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.content}>
				<div>
					<Link href='/'>
						<a className={styles.logo}>
							<IconLogo />
							<h3>TruckTrip</h3>
						</a>
					</Link>
					<p className={styles.socialtext}>
						Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
					</p>
					<ul className={styles.wrapsocial}>
						{social.map(({ href, Icon }, index) => (
							<li key={index}>
								<Link href={href}>
									<a>
										<Icon />
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h5>{product.title}</h5>
					<ul className={styles.list}>
						{product.list.map(({ href, title }, index) => (
							<li key={index}>
								<Link href={href}>
									<a>{title}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h5>{company.title}</h5>
					<ul className={styles.list}>
						{company.list.map(({ href, title }, index) => (
							<li key={index}>
								<Link href={href}>
									<a>{title}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h5>{support.title}</h5>
					<ul className={styles.list}>
						{support.list.map(({ href, title }, index) => (
							<li key={index}>
								<Link href={href}>
									<a>{title}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h5>Contacts us</h5>
					<ul className={styles.contact}>
						<li>
							<Link href='mailto:contact@company.com'>
								<a>
									<div>
										<IconEmail />
									</div>
									<span>contact@company.com</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='tel:(414) 687 - 5892'>
								<a>
									<div>
										<IconPhone />
									</div>
									<span>(414) 687 - 5892</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='https://www.google.com/maps/place/%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/@41.2698704,69.2043808,13z/data=!3m1!4b1!4m5!3m4!1s0x38ae8a6add9db721:0x7a27c4f09ef4001c!8m2!3d41.259418!4d69.1804708'>
								<a>
									<div>
										<IconMark />
									</div>
									<span>794 Mcallister St San Francisco, 94102</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<div className={styles.copytitle}>Copyright &copy; 2022 TSS</div>
				<div className={styles.copylinks}>
					<div>All Rights Reserved</div>
					<div>
						<span>|</span>
						<Link href=''>
							<a>Terms and Conditions</a>
						</Link>
						<span>|</span>
						<Link href=''>
							<a>Privacy Policy</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
