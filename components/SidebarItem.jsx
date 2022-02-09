import Link from 'next/link'
import { useRouter } from 'next/router'

function SidebarItem({ documentSlug, title }) {
	const router = useRouter()
	const { slug } = router.query

	return (
		<li>
			<Link href={`/docs/${documentSlug}`}>
				<a
					className={`border-l pl-3 ${
						slug == documentSlug || (!slug && documentSlug == 'installation')
							? 'border-blue-500 text-blue-500'
							: 'transition-colors duration-200 hover:border-blue-500 hover:text-blue-500'
					}`}
				>
					{title}
				</a>
			</Link>
		</li>
	)
}

export default SidebarItem
