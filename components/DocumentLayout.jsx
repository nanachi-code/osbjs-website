import Head from 'next/head'
import { useState } from 'react'
import DocumentHeader from './DocumentHeader.jsx'
import Sidebar from './Sidebar.jsx'

function DocumentLayout({ children }) {
	const [isSidebarOpen, setSidebarOpen] = useState(true)
	const [isSearchOpen, setSearchOpen] = useState(false)

	const headerProps = { isSidebarOpen, setSidebarOpen, isSearchOpen, setSearchOpen }
	return (
		<>
			<Head>
				<title>osbjs - A minimalist component-based osu! storboarding framework</title>
				<meta
					name="description"
					content="osbjs is an unopinionated framework which allows you to create osu! storyboard in a fast and flexible way."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<DocumentHeader {...headerProps} />

			<main className="relative">
				<Sidebar isSidebarOpen={isSidebarOpen} />
				<div className="md:pl-[20rem]">{children}</div>
			</main>
		</>
	)
}

export default DocumentLayout
