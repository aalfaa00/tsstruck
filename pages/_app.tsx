import Head from 'next/head'
import '../styles/globals.scss'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Provider } from '../src/context/provider'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<DefaultSeo
					openGraph={{
						title: 'TruckTrip',
						type: 'website',
						locale: 'en_IE',
						url: 'https://trucktrip-landing.vercel.app/',
						site_name: 'TruckTrip',
						description: 'Trailer security system is a solution',
						images: [
							{
								url: '/images/trucks.png',
								type: 'png',
								alt: 'Trucks',
							},
						],
					}}
					twitter={{
						handle: '@handle',
						site: '@site',
						cardType: 'summary_large_image',
					}}
				/>
				<meta name='viewport' content='width=device-width,maximum-scale=1,initial-scale=1' />
				<meta content={'IE=edge'} httpEquiv={'X-UA-Compatible'} />
				<meta name='theme-color' content='#7f7eff' />
				<link rel='icon' href='/icons/logo.svg' />
				<link rel='apple-touch-icon' sizes='16x16' href='/icons/logo.svg' />
				<link rel='apple-touch-icon' sizes='32x32' href='/icons/logo.svg' />
				<link rel='apple-touch-icon' sizes='512x512' href='/icons/logo.svg' />
				<link rel='apple-touch-icon' sizes='192x192' href='/icons/logo.svg' />
				<meta name='image' content='/images/trucks.png' />
				<meta name='hostname' content='trucktrip-landing.vercel.app' />
				<meta name='description' content='Trailer security system is a solution' />
				<meta name='meta-apple-mobile-web-app-status-bar-style' content='#7f7eff' />
			</Head>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

export default MyApp
