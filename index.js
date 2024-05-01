import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

async function setupDevEnv() {
	if (!__DEV__) {
		return false
	}

	await import('./msw.polyfills')
	await import('./ReactotronConfig')
	const { serverApiDev } = await import('./src/tests/server/serverDev')
	serverApiDev.listen()
	return true
}

AppRegistry.registerComponent(appName, () => {
	setupDevEnv().then((isDev) => isDev && console.log('server mock is running!'))
	return App
})
