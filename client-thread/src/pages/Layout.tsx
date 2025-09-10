import type { ReactNode } from 'react'
import Header from '../components/elements/Header/Header'

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<main
			className='w-full grid gap-2 justify-center pt-20'
			style={{
				gridTemplateAreas: `
      "header header header"
      "leftSide body rightSide"
    `,
				gridTemplateRows: 'auto 3fr 0%',
				gridTemplateColumns: '150px 550px 150px',
			}}
		>
			<div
				className='header'
				style={{
					gridArea: 'header',
					maxWidth: 850,
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				<Header />
			</div>

			<div className='leftSide' style={{ gridArea: 'leftSide' }}>
				Left Sidebar
			</div>

			<main className='body' style={{ gridArea: 'body' }}>
				{children}
			</main>

			<aside className='rightSide' style={{ gridArea: 'rightSide' }}>
				Right Sidebar
			</aside>
		</main>
	)
}
