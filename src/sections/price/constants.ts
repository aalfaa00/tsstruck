import { IconCrown } from '../../components/icons/crown'
import { IconShare } from '../../components/icons/share'
import { IconLovely } from '../../components/icons/lovely'

export const listServices = [
	{
		title: 'Free',
		isPopular: false,
		Icon: IconLovely,
		price: 0,
		suggestion: 'Perfect plan to get started',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue a proin sed porttitor.',
		startButton: 'Get Your Free Plan',
		serviceList: [
			{
				isInclude: true,
				title: 'Sync accross device',
			},
			{
				isInclude: true,
				title: '5 workspace',
			},
			{
				isInclude: true,
				title: 'Collaborate with 5 user',
			},

			{
				isInclude: false,
				title: 'Sharing permission',
			},
			{
				isInclude: false,
				title: 'Admin tools',
			},
			{
				isInclude: false,
				title: '100+ integrations',
			},
		],
	},
	{
		title: 'Pro',
		isPopular: true,
		Icon: IconCrown,
		price: 12,
		suggestion: 'Perfect plan for professionals!',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue a proin sed porttitor.',
		startButton: 'Get Started',
		serviceList: [
			{
				isInclude: true,
				title: 'Everything in Free Plan',
			},
			{
				isInclude: true,
				title: 'Unlimited workspace',
			},
			{
				isInclude: true,
				title: 'Collaborative workspace',
			},

			{
				isInclude: true,
				title: 'Sharing permission',
			},
			{
				isInclude: true,
				title: 'Admin tools',
			},
			{
				isInclude: true,
				title: '100+ integrations',
			},
		],
	},
	{
		title: 'Ultimate',
		isPopular: false,
		Icon: IconShare,
		price: 33,
		suggestion: 'Best suits for great company!',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue a proin sed porttitor.',
		startButton: 'Get Started',
		serviceList: [
			{
				isInclude: true,
				title: 'Everything in Pro Plan',
			},
			{
				isInclude: true,
				title: 'Daily performance reports',
			},
			{
				isInclude: true,
				title: 'Dedicated assistant',
			},

			{
				isInclude: true,
				title: 'Artificial intelligence',
			},
			{
				isInclude: true,
				title: 'Marketing tools & automations',
			},
			{
				isInclude: true,
				title: 'Advanced security',
			},
		],
	},
]
