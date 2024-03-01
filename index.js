if (__DEV__) {
	import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

async function enableMocking() {
	if (!__DEV__) {
		return
	}

	await import('./msw.polyfills')
	const { server } = await import('./src/mocks/server')
	server.listen()
}

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

enableMocking().then(() => {
	AppRegistry.registerComponent(appName, () => App)
})
