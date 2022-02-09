import Link from 'next/link'
import logo from '../public/logo.png'
import Image from 'next/image'

function Footer() {
	return (
		<footer>
			<div className="mx-auto w-full max-w-screen-xl pb-24">
				<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
					<div className="col-span-2">
						<Link href="/">
							<a>
								<Image src={logo} alt="osb logo" width={80} height={80} />
							</a>
						</Link>
						<p className="pl-2 text-lg">osbjs</p>
						<p className="pl-2">A minimalist component-based osu! storyboarding framework.</p>
					</div>
					<div className="col-span-1">
						<ul className="space-y-3">
							<li>
								<Link href="/docs">
									<a className="transition duration-200 hover:text-blue-500">Documentation</a>
								</Link>
							</li>
							<li>
								<Link href="/learn">
									<a className="transition duration-200 hover:text-blue-500">Learn</a>
								</Link>
							</li>
							<li>
								<Link href="/showcase">
									<a className="transition duration-200 hover:text-blue-500">Showcase</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-span-1">
						<ul className="space-y-3">
							<li>
								<Link href="https://github.com/osbjs/osbjs">
									<a className="transition duration-200 hover:text-blue-500">Source code</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-gray-100">
				<div className="mx-auto w-full max-w-screen-xl">
					<div className="border-t py-2">
						<p className="text-sm">Nanachi © 2021-2022</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
