import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

function DocumentHeader() {
	return (
		<header className="sticky inset-0 z-20 m-auto border-b bg-gray-100 px-4">
			<div className="flex justify-between">
				<div className="flex items-center gap-10">
					<Link href="/">
						<a>
							<Image src={logo} alt="osb logo" width={80} height={80} />
						</a>
					</Link>
				</div>

				<div className="flex items-center justify-end gap-10">
					<input type="text" name="search" className="mr-3 w-[690px] rounded" placeholder="Search..." />
					<Link href="/docs">
						<a className="font-semibold transition duration-200 hover:text-blue-500">Documentation</a>
					</Link>

					<Link href="/learn">
						<a className="font-semibold transition duration-200 hover:text-blue-500">Learn</a>
					</Link>

					<Link href="/showcase">
						<a className="font-semibold transition duration-200 hover:text-blue-500">Showcase</a>
					</Link>

					<Link href="https://github.com/osbjs/osbjs">
						<a>
							<FontAwesomeIcon size="lg" icon={faGithub} />
						</a>
					</Link>

					<Link href="https://discord.gg/t2sHY8TdMA">
						<a>
							<FontAwesomeIcon size="lg" icon={faDiscord} />
						</a>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default DocumentHeader
