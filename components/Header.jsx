import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

function Header() {
	return (
		<header className="m-auto max-w-screen-xl py-4">
			<div className="flex justify-between">
				<div className="flex items-center gap-10">
					<Link href="/">
						<a>
							<Image src={logo} alt="osb logo" width={80} height={80} />
						</a>
					</Link>

					<Link href="/docs">
						<a className="text-lg transition duration-200 hover:text-osbjs">Documentation</a>
					</Link>

					<Link href="/learn">
						<a className="text-lg transition duration-200 hover:text-osbjs">Learn</a>
					</Link>
				</div>

				<div className="flex items-center justify-end">
					<input type="text" name="search" className="mr-3 rounded" placeholder="Search..." />

					<Link href="https://github.com/osbjs/osbjs">
						<a>
							<FontAwesomeIcon size='lg' icon={faGithub} />
						</a>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
