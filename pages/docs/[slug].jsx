import { useEffect } from 'react'
import DocumentLayout from '../../components/DocumentLayout.jsx'
import { getDocument, getDocuments, markdownToHtml } from '../../lib/utils.js'

function Documentation({ doc }) {
	useEffect(() => {
		document.title = `${doc.data.name} | osbjs Documentation`
	})
	return (
		<>
			<DocumentLayout>
				<div
					className="prose mx-auto max-w-4xl p-4 prose-h1:font-bold prose-h2:font-bold prose-h3:font-bold prose-h4:font-bold"
					dangerouslySetInnerHTML={{ __html: doc.content }}
				/>
			</DocumentLayout>
		</>
	)
}

export default Documentation

export async function getStaticProps({ params }) {
	const doc = getDocument(params.slug)
	const content = await markdownToHtml(doc.content)

	return {
		props: {
			doc: {
				...doc,
				content,
			},
		},
	}
}

export async function getStaticPaths() {
	const docs = getDocuments()

	return {
		paths: docs.map((doc) => {
			return {
				params: {
					slug: doc.slug,
				},
			}
		}),
		fallback: false,
	}
}
