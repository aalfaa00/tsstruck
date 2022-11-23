import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Footer } from '../src/components/footer'
import { MainSection } from '../src/sections/main'
import { PriceSection } from '../src/sections/price'
import { useMenuContext } from '../src/context/menu'
import { Partners } from '../src/components/partners'
import { ContactSection } from '../src/sections/contact'
import { BenefitSection } from '../src/sections/benefit'
import { DescriptionSection } from '../src/sections/description'
import { TestimonialsSection } from '../src/sections/testimonials'
const Home = () => {
	const [open] = useMenuContext()

	return (
		<>
			<Head>
				<title>TruckTrip</title>
			</Head>
			<div className={open ? `${styles.container} ${styles.hidden}` : styles.container}>
				<MainSection />
				<Partners />
				<BenefitSection />
				<DescriptionSection />
				<TestimonialsSection />
				<PriceSection />
				<ContactSection />
				<Footer />
			</div>
		</>
	)
}

export default Home
