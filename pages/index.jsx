import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import YouTube from 'react-youtube'
import { markdownToHtml } from '../lib/utils.js'

const defaultCode = `\`\`\`javascript
// Create storyboard instance.
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
sb.generate()
\`\`\``

const componentCode = `\`\`\`javascript
class Flash extends Component {
	constructor(startTime, endTime) {
		super()
        this.startTime = startTime
        this.endTime = endTime
	}

	generate() {
		let startScale = new OsbVector2(854, 480),
			endScale = new OsbVector2(854, 480)
		let fl = new Sprite('sb/dot.png', Layer.Background)
		fl.ScaleVec(this.startTime, this.startTime, startScale, endScale)
		fl.Fade(this.startTime, this.endTime, 1, 0)
		this.registerComponents(fl)
	}
}

let fl = new Flash(0, 3000)

sb.registerComponents(fl)
\`\`\``

export default function Home(props) {
	return (
		<>
			<Head>
				<title>osbjs - A minimalist component-based osu! storboarding framework</title>
				<meta name="description" content="osbjs documentation" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="px-3">
				{/* Hero section */}
				<section className="mx-auto mt-32 mb-44 w-full text-center">
					<div className="mb-16">
						<h1 className="text-5xl font-bold md:text-7xl">
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
				</section>

				{/* Features 1 */}
				<section className="mx-auto mb-36 grid w-full max-w-screen-xl grid-cols-2 gap-3 md:mb-48 md:gap-12">
					<div className="col-span-2 md:col-span-1">
						<h2 className="text-3xl font-bold md:text-5xl">Fast. Simple. Easy to pick up.</h2>
						<p className="mt-3 md:mt-6 md:text-lg">
							Creating storyboard has never been easier. Just tell osbjs where your beatmap folder should be. No extra configurations.
						</p>
					</div>

					<div className="col-span-2 md:col-span-1" dangerouslySetInnerHTML={{ __html: props.defaultCode }} />
				</section>

				{/* Features 2 */}
				<section className="mx-auto mb-40 grid w-full max-w-screen-xl grid-cols-2 gap-3 md:mb-48 md:gap-12">
					<div className="col-span-2 md:col-span-1" dangerouslySetInnerHTML={{ __html: props.componentCode }} />

					<div className="order-first col-span-2 md:order-last md:col-span-1">
						<h2 className="text-3xl font-bold md:text-5xl">Flexible. Reusable.</h2>
						<p className="mt-3 md:mt-6 md:text-lg">
							Since everything is a component, you can reuse your code and manage your project however you want. Even better, you can
							publish your own component and let others use it!
						</p>
					</div>
				</section>

				{/* Feature 3 */}
				<section className="mx-auto mb-40 w-full max-w-screen-xl md:mb-48">
					<div className="mb-6 md:mb-20 md:text-center">
						<h2 className="text-3xl font-bold md:text-5xl">Optional packages</h2>
						<p className="mt-3 md:mt-6 md:text-lg">These are packages that help you speed up your storyboarding process</p>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						<Link href="/docs/cli-usage">
							<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
								<div className="font-bold">cli</div>
								<p>CLI tool for osbjs</p>
							</a>
						</Link>

						<Link href="/docs/osujs-introduction">
							<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
								<div className="font-bold">osujs</div>
								<p>osu! beatmap parser</p>
							</a>
						</Link>

						<Link href="/docs/math-introduction">
							<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
								<div className="font-bold">math</div>
								<p>Math helpers</p>
							</a>
						</Link>

						<Link href="/docs/txtgen-introduction">
							<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
								<div className="font-bold">txtgen</div>
								<p>Text image generator for osbjs</p>
							</a>
						</Link>

						<Link href="/docs/components-introduction">
							<a className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100">
								<div className="font-bold">components</div>
								<p>osbjs pre-built components</p>
							</a>
						</Link>
					</div>
				</section>

				{/* Showcase */}
				<section className="mx-auto mb-40 w-full max-w-screen-xl md:mb-48">
					<div className="mb-6 md:mb-20 md:text-center">
						<h2 className="text-3xl font-bold md:text-5xl">Showcase</h2>
						<p className="mt-3 md:mt-6 md:text-lg">Storyboards that were made using osbjs</p>
					</div>

					<div className="text-center">
						<YouTube videoId="o3HZRwHTgYg" className="m-auto mb-6 block h-[180px] w-[320px] md:h-[360px] md:w-[640px]" />
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
				</section>

				<Footer />
			</main>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			defaultCode: await markdownToHtml(defaultCode),
			componentCode: await markdownToHtml(componentCode),
		},
	}
}
