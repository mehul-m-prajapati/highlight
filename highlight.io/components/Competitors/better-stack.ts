import betterstacksmall from '../../public/images/better-stack-small.svg'
import betterstackfull from '../../public/images/better-stack.svg'
import { Competitor } from './competitors'
import {
	HighlightIsOpenAndTransparent,
	HighlightShipsNewFeatures,
} from './shared-snippets'

export const BetterStackSpec: Competitor = {
	name: 'Better Stack',
	header: 'A Truly Open Source Better Stack Alternative.',
	subheader:
		'Session replay of your frontend, fullstack error monitoring, and powerful logging.',
	logoDesktop: betterstackfull,
	logoMobile: betterstacksmall,
	sections: [
		{
			title: 'General',
			rows: [
				{
					feature: 'Unlimited Team Members',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Support Ticket Integrations',
					tooltip:
						'Create tickets with Linear, GitHub, Height, or ClickUp.',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Self-hosted Options',
					tooltip:
						'Self-hosted options are available for highlight.io',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Analytics Integrations',
					tooltip: 'Integrations with mixpanel, amplitude, etc..',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Self-serve Setup',
					highlight: 1,
					competitor: 1,
				},
			],
		},
		{
			title: 'Session Replay',
			rows: [
				{
					feature: 'Session Commenting',
					tooltip:
						'Create comments on sessions to tag folks on your team of issues.',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Session Sharing',
					tooltip:
						'Ability to share sessions across your team and with customers.',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Privacy SDKs',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Embedded, fullstack error monitoring',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Canvas & WebGL Recording',
					tooltip:
						'Ability to record canvas and WebGl elements in your application.',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Shadow DOM Recording',
					tooltip:
						'Ability to record shadow DOM elements in your application.',
					highlight: 1,
					competitor: 0,
				},
			],
		},
		{
			title: 'Error Monitoring',
			rows: [
				{
					feature: 'Embedded Session Replay',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Error Sharing',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Support for Backend SDKs',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Agent-less architecture',
					highlight: 1,
					competitor: 0,
				},
			],
		},
		{
			title: 'Logging',
			rows: [
				{
					feature: 'Frontend logging',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Backend logging',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Embedded replay and stacktraces',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Agent-less architecture',
					highlight: 1,
					competitor: 0,
				},
			],
		},
	],
	paragraphs: [
		HighlightIsOpenAndTransparent('Better Stack'),
		HighlightShipsNewFeatures,
		{
			header: 'Full-stack Observability',
			body: 'While Better Stack provides a comprehensive set of separate features for error monitoring and logging, it does not support session replay. [Highlight.io](https://highlight.io) enables teams to monitor and optimize their entire tech stack, pairing server-side infrastructure with your frontend web applications. This makes Highlight.io a more comprehensive solution for developers who need to monitor their entire tech stack, in a simple, easy to implement solution.',
		},
	],
}
