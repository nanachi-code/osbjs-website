import Head from 'next/head'
import DocumentHeader from './DocumentHeader.jsx'
import Sidebar from './Sidebar.jsx'

function DocumentLayout({ children }) {
	return (
		<>
			<Head>
				<title>osbjs - A minimalist component-based osu! storboarding framework</title>
				<meta name="description" content="osbjs documentation" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<DocumentHeader />

			<main className="relative">
				<Sidebar />
				<div className="pl-[20rem]">{children}</div>
			</main>
		</>
	)
}

export default DocumentLayout
