import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'

const documentDirectory = join(process.cwd(), 'docs-md')

export async function markdownToHtml(markdown) {
	const result = await remark().use(prism).use(html, { sanitize: false }).process(markdown)
	return result.toString()
}

export function getDocuments() {
	const files = readdirSync(documentDirectory)

	return files.map((file) => file.replace(/\.md$/, '')).map((slug) => getDocument(slug))
}

export function getDocument(slug) {
	const fullPath = join(documentDirectory, `${slug}.md`)

	const fileContents = readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents)

	return { data, content, slug }
}
