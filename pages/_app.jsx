import { config } from '@fortawesome/fontawesome-svg-core'
import '../styles/globals.css'
import '../styles/prism-vsc-dark.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router'

config.autoAddCss = false
const progress = new ProgressBar({
	size: 4,
	color: '#4d04de',
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
