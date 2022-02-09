import DocumentLayout from '../components/DocumentLayout.jsx'
import { getDocument, markdownToHtml } from '../lib/utils.js'

function Documentation({ doc }) {
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

export async function getStaticProps() {
	const doc = getDocument('installation')
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
