import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import YouTube from 'react-youtube'

const defaultCode = `const {
	Storyboard,
	Sprite,
	Easing,
	OsbVector2,
	Origin,
	Layer
} = require('@osbjs/osbjs')

// Create storyboard instance.
// If 'path' is not specified, osbjs will create a new 'storyboard 'folder
// and save the storyboard there.
const sb = new Storyboard('osb_filename.osb')

// Create a sprite
let sprite = new Sprite('sb/s.png', Layer.Background, Origin.Center)

// Add move command to sprite.
let startTime = '00:01:000',
	endTime = '00:10:000',
	startPos = new OsbVector2(320, 345),
	endPos = new OsbVector2(240, 480)
sprite.Move(startTime, endTime, startPos, endPos, Easing.OutExpo)

// Register sprite.
sb.registerComponents(sprite)

// Generate storyboard file.
sb.generate()`

const componentCode = `// components/Flash.js
const { Sprite, Component, Layer, OsbVector2 } = require('@osbjs/osbjs')

module.exports = class Flash extends Component {
	constructor(startTime, endTime) {
		super()
        this.startTime = startTime
        this.endTime = endTime
		this.startScale = new OsbVector2(854, 480)
		this.endScale = new OsbVector2(854, 480)
	}

	generate() {
		let fl = new Sprite('sb/dot.png', Layer.Background)
		fl.ScaleVec(this.startTime, this.startTime, this.startScale, this.endScale)
		fl.Fade(this.startTime, this.endTime, 1, 0)
		this.registerComponents(fl)
	}
}

// main.js
const Flash = require('./components/Flash')

let fl = new Flash(0, 3000)
scene.registerComponents(fl)`

export default function Home() {
	return (
		<div>
			<Head>
				<title>osbjs - A minimalist component-based osu! storboarding framework</title>
				<meta name="description" content="osbjs documentation" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header />

				{/* Hero section */}
				<section className="mt-32 mb-44 text-center">
					<div className="mx-auto max-w-screen-xl">
						<div className="mb-16">
							<h1 className="text-7xl font-bold">
								A minimalist component-based<br></br> <span className="text-osu">osu!</span> storboarding framework.
							</h1>
							<p className="mt-12 text-xl">Create osu storyboard in a simple yet flexible way.</p>
						</div>
						<div className="mr-3 inline-block rounded border border-black bg-slate-100 p-3 font-mono">npm i @osbjs/osbjs</div>
						<Link href="/docs">
							<a>
								<div className="hover:bg inline-block rounded border border-black bg-osbjs-bright p-3 text-white transition duration-200 hover:bg-osbjs">
									Get started &gt;
								</div>
							</a>
						</Link>
					</div>
				</section>

				{/* Features 1 */}
				<section className="mb-48">
					<div className="m-auto grid max-w-screen-xl grid-cols-2 gap-12">
						<div>
							<h2 className="text-5xl font-bold">Fast. Simple. Easy to pick up.</h2>
							<p className="mt-6 text-lg">
								Creating storyboard has never been easier. Just a few line of code and your storyboard is up running!
							</p>
						</div>

						<div>
							<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
								{defaultCode}
							</SyntaxHighlighter>
						</div>
					</div>
				</section>

				{/* Features 2 */}
				<section className="mb-48">
					<div className="m-auto grid max-w-screen-xl grid-cols-2 gap-12">
						<div>
							<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
								{componentCode}
							</SyntaxHighlighter>
						</div>

						<div>
							<h2 className="text-5xl font-bold">Flexible. Reusable.</h2>
							<p className="mt-6 text-lg">
								Since everything is a component, you can reuse your code and manage your project however you want. Even better, you
								can publish your own components and let others use it!
							</p>
						</div>
					</div>
				</section>

				{/* Feature 3 */}
				<section className="mb-48">
					<div className="m-auto grid max-w-screen-xl">
						<div className="mb-20 text-center">
							<h2 className="text-5xl font-bold">Optional packages</h2>
							<p className="mt-6 text-lg">These are packages that help you speed up your storyboarding process</p>
						</div>

						<div className="grid grid-cols-3 gap-6">
							<Link href="/docs/package/cli">
								<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
									<div className="font-bold">cli</div>
									<p>CLI tool for osbjs</p>
								</a>
							</Link>

							<Link href="/docs/package/osujs">
								<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
									<div className="font-bold">osujs</div>
									<p>osu! beatmap parser</p>
								</a>
							</Link>

							<Link href="/docs/package/math">
								<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
									<div className="font-bold">math</div>
									<p>Math helpers</p>
								</a>
							</Link>

							<Link href="/docs/package/txtgen">
								<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
									<div className="font-bold">txtgen</div>
									<p>Text image generator for osbjs</p>
								</a>
							</Link>

							<Link href="/docs/package/components">
								<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
									<div className="font-bold">components</div>
									<p>osbjs pre-built components</p>
								</a>
							</Link>
						</div>
					</div>
				</section>

				{/* Showcase */}
				<section className="mb-48">
					<div className="m-auto grid max-w-screen-xl">
						<div className="text-center">
							<h2 className="text-5xl font-bold">Showcase</h2>
							<p className="mt-6 mb-20 text-lg">Storyboards that were made using osbjs</p>

							<YouTube videoId="o3HZRwHTgYg" className="m-auto mb-6 block h-[360px] w-[640px]" />
							<p>
								Storyboard by <span>Smug Nanachi</span>
							</p>
							<Link href="https://github.com/nanachi-code/phai-chang-em-da-yeu">
								<a className="mr-2 text-sm transition duration-200 hover:text-osbjs">Source code</a>
							</Link>

							<Link href="https://osu.ppy.sh/beatmapsets/1526749#osu/3123402">
								<a className="text-sm transition duration-200 hover:text-osbjs">Map</a>
							</Link>
						</div>
					</div>
				</section>

				<Footer />
			</main>
		</div>
	)
}
